// ZPE Maranhão · Site Institucional — Infraestrutura
const { Eyebrow, Card, StatCard, Badge, Button } = window.ZPEMaranhODesignSystem_408e04;

function InfraHero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-ocean-floor)', color: '#fff', padding: '88px 40px' }}>
      <div className="zpe-grain-dark" style={{ position: 'absolute', inset: 0 }} />
      <img src="../../assets/brand/world_dotted.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: .14, filter: 'brightness(0) invert(1)', zIndex: 1 }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1120, margin: '0 auto' }}>
        <Eyebrow tone="light">Infraestrutura</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(36px,5vw,64px)', letterSpacing: '-.025em', margin: '16px 0 0', lineHeight: .98, maxWidth: '16ch' }}>
          Tudo pronto para <b style={{ fontWeight: 600 }}>operar e exportar</b>
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,.65)', maxWidth: '52ch', marginTop: 20, lineHeight: 1.55 }}>
          Logística multimodal, energia, conectividade e área industrial preparada — concentrados em um raio de menos de 5km.
        </p>
      </div>
    </section>
  );
}

function LogisticsGrid() {
  const rows = [
    { eyebrow: 'Porto do Itaqui', title: '800m · calado 23m', body: 'Um dos portos mais profundos do Brasil, com terminal de contêineres e granéis a poucos minutos da zona.' },
    { eyebrow: 'Ferrovia Carajás', title: 'Terminal integrado', body: 'Conexão direta à malha ferroviária para escoamento de minério e carga geral.' },
    { eyebrow: 'Ferrovia Transnordestina', title: 'Em expansão', body: 'Novo eixo ferroviário ampliando o alcance da ZPE ao interior do Nordeste.' },
    { eyebrow: 'Rodovia BR-135', title: 'Acesso multimodal', body: 'Ligação rodoviária aos principais corredores logísticos da região.' },
    { eyebrow: 'Energia', title: 'Matriz renovável', body: 'Oferta robusta com forte componente limpo para operação industrial intensiva.' },
    { eyebrow: 'Área industrial', title: '300 ha urbanizados', body: 'Lotes com infraestrutura de utilidades, água e telecom prontos para instalação.' },
  ];
  return (
    <section style={{ background: 'var(--canvas)', padding: '80px 40px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <Eyebrow>Componentes do complexo</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px,3.4vw,40px)', color: 'var(--blue)', letterSpacing: '-.015em', margin: '10px 0 32px', lineHeight: 1.08 }}>
          Seis pilares de <b style={{ fontWeight: 600 }}>infraestrutura</b>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {rows.map(r => <Card key={r.eyebrow} eyebrow={r.eyebrow} title={r.title}>{r.body}</Card>)}
        </div>
      </div>
    </section>
  );
}

function InfraStats() {
  return (
    <section style={{ background: 'var(--grad-frost)', padding: '72px 40px', position: 'relative' }}>
      <div className="zpe-grain" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        <StatCard label="Área total" value="300" unit="ha" />
        <StatCard label="Distância ao porto" value="800" unit="m" />
        <StatCard label="Calado do porto" value="23" unit="m" />
        <StatCard tone="green" label="Expansão prevista" value="40" unit="%" />
      </div>
    </section>
  );
}

function Infraestrutura() {
  return (
    <>
      <InfraHero />
      <LogisticsGrid />
      <InfraStats />
    </>
  );
}
window.Infraestrutura = Infraestrutura;
