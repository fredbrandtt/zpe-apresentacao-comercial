// ZPE Maranhão · Site Institucional — Footer
const { Logo } = window.ZPEMaranhODesignSystem_408e04;

function Footer() {
  const cols = [
    { h: 'Institucional', links: ['Sobre a ZPE', 'Governança', 'Legislação', 'Notícias'] },
    { h: 'Infraestrutura', links: ['Localização', 'Logística', 'Energia', 'Conectividade'] },
    { h: 'Investidor', links: ['Incentivos fiscais', 'Como instalar', 'Oportunidades', 'Contato'] },
  ];
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-abyss)', color: '#fff', padding: '64px 40px 40px' }}>
      <div className="zpe-grain-dark" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <Logo theme="dark" basePath="../../" size={34} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.55)', marginTop: 16, lineHeight: 1.6, maxWidth: '34ch' }}>
              Zona de Processamento de Exportação do Maranhão. Infraestrutura de classe mundial para empresas exportadoras.
            </p>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--green-soft)', marginBottom: 14 }}>{c.h}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                {c.links.map(l => (
                  <li key={l}><a href="#" onClick={e => e.preventDefault()} style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.12)', marginTop: 48, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,.4)' }}>© 2026 ZPE Maranhão · Empresa de Estado</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,.4)' }}>São Luís · Maranhão · Brasil</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
