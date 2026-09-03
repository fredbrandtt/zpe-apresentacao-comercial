const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

const W = 1920, H = 1080;
const QUALITY = parseInt(process.env.Q || '72', 10);

(async () => {
  const src = process.argv[2], out = process.argv[3];
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  const errs = []; page.on('pageerror', e => errs.push(String(e)));

  await page.goto(pathToFileURL(src).href);
  // Let the preloader finish
  await page.waitForTimeout(6000);

  const info = await page.evaluate(() => {
    const slides = [...document.querySelectorAll('.slide')];
    return slides.map((s, i) => ({
      i,
      video: !!s.hasAttribute('data-video-slide'),
      chapter: s.getAttribute('data-chapter'),
    }));
  });

  // Hide chrome that shouldn't print
  await page.addStyleTag({ content: `
    .fs-btn-fixed, #lang-btn, .hud-fs-btn,
    .progress-bar, #progressBar,
    .hud, .hud-chapter, .hud-dots, .hud-counter, .hud-spacer,
    #hudChapter, #hudDots, #hudCounter,
    .nav-arrow, .nav-arrows, [class*="nav-arrow"],
    #preloader, .preloader { display: none !important; opacity: 0 !important; }
  `});

  const shots = [];
  for (const s of info) {
    await page.evaluate(i => window.goToSlide(i), s.i);

    if (s.video) {
      // Fast-forward the transition video to its end so the reveal fires
      await page.evaluate(() => {
        document.querySelectorAll('video').forEach(v => { v.playbackRate = 16; });
      });
      await page.waitForTimeout(7000);
      // Force any still-hidden reveal elements visible
      await page.evaluate(() => {
        ['gps-final-img'].forEach(id => { const e = document.getElementById(id); if (e) e.style.opacity = '1'; });
        ['gps-badge','gps-title','gps-indicators','gps-closing'].forEach(id => {
          const e = document.getElementById(id);
          if (e) { e.style.opacity = '1'; e.style.transform = 'none'; }
        });
        const f = document.getElementById('gps-terr-fill');
        if (f) f.style.width = '60%';
      });
      await page.waitForTimeout(1800);
    } else {
      await page.waitForTimeout(2200);
    }

    const buf = await page.screenshot({ type: 'jpeg', quality: QUALITY });
    shots.push(buf);
    if (process.env.DUMP) fs.writeFileSync(process.env.DUMP + '/pg' + String(s.i+1).padStart(2,'0') + '.jpg', buf);
    process.stdout.write(`slide ${s.i + 1}/${info.length} (${s.video ? 'video' : 'static'}) ${(buf.length/1024).toFixed(0)}KB\n`);
  }

  await browser.close();

  const pdf = await PDFDocument.create();
  pdf.setTitle('ZPE Maranhão — Apresentação');
  for (const buf of shots) {
    const img = await pdf.embedJpg(buf);
    const p = pdf.addPage([W, H]);
    p.drawImage(img, { x: 0, y: 0, width: W, height: H });
  }
  fs.writeFileSync(out, await pdf.save());
  console.log('errors:', JSON.stringify(errs));
  console.log('OUT', out, (fs.statSync(out).size/1024/1024).toFixed(2) + ' MB');
})();

/*
 * Uso:
 *   npm install playwright pdf-lib
 *   node export-pdf.js index.html ZPE-Maranhao-Apresentacao-leve.pdf
 *
 * Qualidade JPEG via env Q (padrão 72). Q=85 gera ~2.5MB; Q=60 gera ~1.2MB.
 * Slides de vídeo têm o playbackRate acelerado para 16x para que o reveal
 * dispare e o frame final seja capturado.
 */
