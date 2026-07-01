// ZPE Maranhão · Connection mesh — rede de nós (metáfora do hub de exportação).
// Apenas em blocos azuis escuros; verde accent em baixa opacidade; pausa fora da viewport.
function ConnectionMesh({ style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let nodes = [], w = 0, h = 0, running = true, raf = 0;
    function resize() {
      const r = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = r.width; h = canvas.height = r.height;
    }
    function make() {
      nodes = [];
      const count = Math.min(22, Math.floor((w * h) / 42000));
      for (let i = 0; i < count; i++) nodes.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, r: 2 + Math.random() * 2,
      });
    }
    function draw() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 200) {
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = 'rgba(76,172,75,' + (0.12 * (1 - d / 200)) + ')'; ctx.lineWidth = .8; ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(76,172,75,0.35)'; ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    resize(); make(); draw();
    const obs = new IntersectionObserver(es => { running = es[0].isIntersecting; if (running) draw(); }, { threshold: .05 });
    obs.observe(canvas.parentElement);
    const onR = () => { resize(); make(); };
    window.addEventListener('resize', onR);
    return () => { running = false; cancelAnimationFrame(raf); obs.disconnect(); window.removeEventListener('resize', onR); };
  }, []);
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, ...style }} />;
}
window.ConnectionMesh = ConnectionMesh;
