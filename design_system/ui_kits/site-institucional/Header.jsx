// ZPE Maranhão · Site Institucional — Header
const { Logo, Button } = window.ZPEMaranhODesignSystem_408e04;

function Header({ current, onNav }) {
  const items = [
    { id: 'home', label: 'Início' },
    { id: 'infra', label: 'Infraestrutura' },
    { id: 'oportunidades', label: 'Oportunidades' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--line)',
      display: 'flex', alignItems: 'center', gap: 32, height: 68, padding: '0 40px',
    }}>
      <button onClick={() => onNav('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
        <Logo theme="light" basePath="../../" size={34} />
      </button>
      <nav style={{ display: 'flex', gap: 28, marginLeft: 24 }}>
        {items.map(it => (
          <button key={it.id} onClick={() => onNav(it.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0',
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: current === it.id ? 600 : 400,
            color: current === it.id ? 'var(--blue)' : 'var(--ink-soft)',
            borderBottom: current === it.id ? '2px solid var(--green)' : '2px solid transparent',
          }}>{it.label}</button>
        ))}
      </nav>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button variant="ghost" size="sm" onClick={() => onNav('oportunidades')}>Contato</Button>
        <Button variant="primary" size="sm" iconRight="→" onClick={() => onNav('oportunidades')}>Investir</Button>
      </div>
    </header>
  );
}
window.Header = Header;
