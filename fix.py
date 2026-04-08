import io

with open("c:/Users/INFORMATICA/Documents/apresentacoes/ZPE Comercial/index.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Nav update
script_old_nav = """function updateNav() {
  counter.innerText = (current + 1) + '/' + slides.length;
  progressFill.style.width = ((current + 1) / slides.length * 100) + '%';
  const prevBtn = document.getElementById('nav-prev');"""

script_new_nav = """function updateNav() {
  if (current === 0) {
    counter.style.display = 'none';
    progressFill.style.width = '0%';
  } else {
    counter.style.display = 'block';
    counter.innerText = current + '/' + (slides.length - 1);
    progressFill.style.width = (current / (slides.length - 1) * 100) + '%';
  }
  const prevBtn = document.getElementById('nav-prev');"""

content = content.replace(script_old_nav, script_new_nav)

counter_old = '<div class="slide-counter" id="slide-counter">1/10</div>'
counter_new = '<div class="slide-counter" id="slide-counter" style="display: none;">0/10</div>'
content = content.replace(counter_old, counter_new)

# 2. Cover slide
coverslide_target = """      <!-- SLIDE 1 -->
      <div class="slide slide-default slide-dots active" data-chapter="0">"""
coverslide_new = """      <!-- SLIDE 0 (CAPA) -->
      <div class="slide slide-capa active" data-chapter="-1">
        <img src="logo-zpe.png" class="capa-logo" alt="Logo ZPE">
        <h1 class="capa-title">ZPE Maranhão</h1>
        <div class="capa-subtitle">A conexão estratégica do Maranhão com o mundo.</div>
        <div class="capa-divider"></div>
        <div class="capa-footer-logos">
          <img src="investe-ma-logo.png" alt="Investe MA">
          <img src="governo-ma-logo.png" alt="Governo MA">
        </div>
      </div>

      <!-- SLIDE 1 -->
      <div class="slide slide-dark slide-dots" data-chapter="0">"""
content = content.replace(coverslide_target, coverslide_new)

# 3. Slide Theme Replacements
replacements = {
    '<!-- SLIDE 2 -->\n      <div class="slide slide-default" data-chapter="0">': '<!-- SLIDE 2 -->\n      <div class="slide slide-light" data-chapter="0">',
    '<!-- SLIDE 3 -->\n      <div class="slide slide-numeric slide-grid" data-chapter="1">': '<!-- SLIDE 3 -->\n      <div class="slide slide-dark slide-numeric slide-grid" data-chapter="1">',
    '<!-- SLIDE 4 -->\n      <div class="slide slide-default" data-chapter="1">': '<!-- SLIDE 4 -->\n      <div class="slide slide-dark" data-chapter="1">',
    '<!-- SLIDE 5 -->\n      <div class="slide slide-default slide-dots" data-chapter="2">': '<!-- SLIDE 5 -->\n      <div class="slide slide-light slide-dots" data-chapter="2">',
    '<!-- SLIDE 6 -->\n      <div class="slide slide-default slide-grid" data-chapter="2">': '<!-- SLIDE 6 -->\n      <div class="slide slide-light slide-grid" data-chapter="2">',
    '<!-- SLIDE 7 -->\n      <div class="slide slide-numeric" data-chapter="3">': '<!-- SLIDE 7 -->\n      <div class="slide slide-dark slide-numeric" data-chapter="3">',
    '<!-- SLIDE 8 -->\n      <div class="slide slide-numeric" data-chapter="3">': '<!-- SLIDE 8 -->\n      <div class="slide slide-dark slide-numeric" data-chapter="3">',
    '<!-- SLIDE 9 -->\n      <div class="slide slide-default slide-dots" data-chapter="4">': '<!-- SLIDE 9 -->\n      <div class="slide slide-light slide-dots" data-chapter="4">',
    '<!-- SLIDE 10 -->\n      <div class="slide slide-hero" data-chapter="4">': '<!-- SLIDE 10 -->\n      <div class="slide slide-hero slide-end" data-chapter="4">',
}
for k, v in replacements.items():
    content = content.replace(k, v)

# 4. Slide 10 Logos
s10_logos_old = '<div class="anim anim-foot s10-logos"><div>LOGO ZPE</div><div>LOGO GOV MA</div></div>'
s10_logos_new = """<div class="anim anim-foot s10-logos">
          <img src="logo-zpe.png" style="height: 40px; filter: brightness(0) invert(1);" alt="ZPE">
          <img src="governo-ma-logo.png" style="height: 40px;" alt="Governo MA">
        </div>"""
content = content.replace(s10_logos_old, s10_logos_new)

# 5. Slide 2 Map
svg_old = """<div class="s2-map">
            <svg viewBox="0 0 100 100" class="s2-svg" preserveAspectRatio="xMidYMid meet">
              <path class="s2-br" d="M30,10 L70,20 L85,50 L55,95 L20,70 L5,40 Z"/>
              <path class="s2-ma" d="M55,25 L65,22 L65,35 L55,40 Z"/>
            </svg>
            <div style="position:absolute; top:28%; left:60%;" class="s2-marker-halo">
              <div style="width:8px; height:8px; border-radius:50%; background:hsl(120,40%,49%); margin-left:-4px; margin-top:-4px;"></div>
            </div>
          </div>"""
svg_new = '<img src="maranhao_stylized.jpg" style="height: clamp(240px, 40vh, 380px); object-fit: contain; filter: drop-shadow(0 0 24px hsl(120 40% 49% / 0.4)) brightness(1.1);">'
content = content.replace(svg_old, svg_new)

# 6. CSS insertions
css_insertion = """
/* Theme Alternation */
.slide-capa { background-image: url('bg_hero_blue_compressed.jpg'); background-size: cover; background-position: center; flex-direction: column; align-items: flex-start; justify-content: center; padding: 0 80px; }
.slide-capa::before { content: ''; position: absolute; inset: 0; background: hsl(220 55% 15% / 0.55); z-index: -1; pointer-events: none; }
.capa-logo { height: 56px; object-fit: contain; margin-bottom: 48px; }
.capa-title { font-family: 'Barlow', sans-serif; font-weight: 800; font-size: clamp(56px, 7vw, 96px); color: #fff; letter-spacing: -0.025em; line-height: 1.0; margin-bottom: 16px; width: 100%; max-width: none; }
.capa-subtitle { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: clamp(20px, 2.5vw, 32px); color: hsl(0 0% 85%); letter-spacing: -0.01em; margin-bottom: 64px; }
.capa-divider { width: 64px; height: 3px; background: hsl(120 40% 49%); margin-bottom: 64px; }
.capa-footer-logos { display: flex; align-items: center; justify-content: flex-start; gap: 32px; }
.capa-footer-logos img { height: 36px; }

.slide-dark { background: var(--bg-dark); }
.slide-light { background: hsl(0 0% 97%); color: hsl(220 30% 25%); }
.slide-light::before { background: radial-gradient(ellipse 80% 60% at 15% 20%, hsl(220 55% 32% / 0.05) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 85% 80%, hsl(120 40% 49% / 0.04) 0%, transparent 65%), hsl(0 0% 97%); }
.slide-light h1 { color: hsl(220 55% 32%); }
.slide-light .display-number, .slide-light .s7-num, .slide-light .s9-num, .slide-light .s2-icon { color: hsl(120 40% 49%); }
.slide-light .text-sec { color: hsl(220 20% 45%); }
.slide-light .card-glass, .slide-light .card-num, .slide-light .s1-card { background: #fff; box-shadow: 0 4px 24px hsl(220 55% 32% / 0.12); border: 1px solid hsl(194 20% 85%); }
.slide-light .bold { color: hsl(220 30% 25%); }
.slide-light .label-cat { color: hsl(220 55% 32%); }
.slide-light .text-body { color: hsl(220 30% 25%); }
.slide-light .footer-line, .slide-light .text-foot { color: hsl(220 20% 45%); }
.slide-light .s5-dot { background: hsl(120 40% 49%); box-shadow: 0 0 8px hsl(120 40% 49% / 0.3); }
.slide-light .s6-node .s6-nyear { color: hsl(220 55% 32%); }
.slide-light .s6-node.recent .s6-nyear { color: hsl(120 40% 49%); }
.slide-light .s6-line { background: hsl(220 55% 32% / 0.2); }
.slide-light .s6-ndot { background: hsl(220 55% 32%); border-color: hsl(220 55% 32% / 0.5); }
.slide-light .s9-pt { color: hsl(220 55% 32%); border-bottom-color: hsl(220 55% 32% / 0.2); }

.slide-end { background-image: url('bg_hero_blue_compressed.jpg'); background-size: cover; background-position: center; }
.slide-end::before { content: ''; position: absolute; inset: 0; background: hsl(220 55% 15% / 0.7); z-index: -2; pointer-events: none; }

/* Slides Specific */
"""
content = content.replace("/* Slides Specific */", css_insertion.strip())

# Remove old Slide 10 background style
old_s10_css = ".slide[data-chapter=\"4\"]:last-child::before { background: var(--hero-gradient); }"
content = content.replace(old_s10_css, "/* slide 10 background handled by .slide-end */")

old_s10_logos_css = ".s10-logos { display: flex; gap: 4rem; font-family: 'Barlow', sans-serif; font-weight: 800; font-size: 24px; letter-spacing: 2px; color: hsl(0 0% 100% / 0.3); }"
new_s10_logos_css = ".s10-logos { display: flex; gap: 40px; align-items: center; }"
content = content.replace(old_s10_logos_css, new_s10_logos_css)

with open("c:/Users/INFORMATICA/Documents/apresentacoes/ZPE Comercial/index.html", "w", encoding="utf-8") as f:
    f.write(content)
