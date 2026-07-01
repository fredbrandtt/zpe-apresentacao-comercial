// ZPE Maranhão · Site Institucional — Home
const { Eyebrow, Button, Card, StatCard, BrandArrow, Badge } = window.ZPEMaranhODesignSystem_408e04;

function Hero({ onNav }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-aurora-blue)', color: '#fff' }}>
      <div className="zpe-grain-dark" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
      <window.ConnectionMesh />
      <div style={{ position: 'absolute', right: -40, top: '50%', transform: 'translateY(-50%)', zIndex: 1, opacity: .9 }}>
        <BrandArrow size={420} mode="outline" color="rgba(76,172,75,0.16)" />
      </div>
      <img src="../../assets/brand/world_dotted.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: .13, filter: 'brightness(0) invert(1)', zIndex: 1 }} />
      <div style={{ position: 'relative', zIndex: 3, maxWidth: 1120, margin: '0 auto', padding: '104px 40px 96px' }}>
        <Eyebrow tone="light">Zona de Processamento de Exportação</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(44px,6vw,80px)', lineHeight: .96, letterSpacing: '-.025em', margin: '18px 0 0', maxWidth: '15ch' }}>
          Infraestrutura de <b style={{ fontWeight: 600 }}>classe mundial</b> no Maranhão
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,.65)', maxWidth: '50ch', marginTop: 22, lineHeight: 1.55 }}>
          300 hectares de área industrial com acesso direto à ferrovia, rodovia e o Porto do Itaqui, um dos mais profundos do Brasil.
        </p>
        <div style={{ display: 'flex', gap: 48, marginTop: 44, flexWrap: 'wrap' }}>
          {[['300', 'ha', 'Área total'], ['23', 'm', 'Calado do porto'], ['800', 'm', 'Distância ao porto']].map(([n, u, d]) => (
            <div key={d}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 48, letterSpacing: '-.02em', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>
                {n}<span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--green-soft)', marginLeft: 4, fontWeight: 500 }}>{u}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,.4)', letterSpacing: '.06em', textTransform: 'uppercase', marginTop: 6 }}>{d}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
          <Button variant="primary" size="lg" iconRight="→" onClick={() => onNav('oportunidades')}>Conheça a ZPE</Button>
          <Button variant="secondary" size="lg" onClick={() => onNav('infra')} style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}>Ver infraestrutura</Button>
        </div>
      </div>
    </section>
  );
}

function InfraSection({ onNav }) {
  const cards = [
    { eyebrow: 'Logística', title: 'Porto do Itaqui · 800m', body: 'Um dos portos mais profundos do Brasil, com calado de 23 metros, a menos de 1km do complexo.' },
    { eyebrow: 'Ferrovia', title: 'Carajás & Transnordestina', body: 'Acesso direto à malha ferroviária nacional com terminal de carga integrado à zona.' },
    { eyebrow: 'Rodovia', title: 'BR-135 integrada', body: 'Conexão rodoviária multimodal ligando o complexo aos principais corredores do Nordeste.' },
    { eyebrow: 'Energia', title: 'Matriz limpa disponível', body: 'Oferta robusta de energia com forte componente renovável para operação industrial.' },
  ];
  return (
    <section style={{ background: 'var(--canvas)', padding: '88px 40px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <Eyebrow>Infraestrutura</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(30px,3.6vw,44px)', color: 'var(--blue)', letterSpacing: '-.015em', margin: '10px 0 0', lineHeight: 1.06 }}>
          Conectividade <b style={{ fontWeight: 600 }}>multimodal</b> em um raio de 5km
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 36 }}>
          {cards.map(c => <Card key={c.title} eyebrow={c.eyebrow} title={c.title}>{c.body}</Card>)}
        </div>
      </div>
    </section>
  );
}

function DataBand() {
  return (
    <section style={{ background: 'var(--grad-frost)', padding: '88px 40px', position: 'relative' }}>
      <div className="zpe-grain" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'center' }}>
        <div>
          <Eyebrow>Dados estratégicos</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px,3.4vw,40px)', color: 'var(--blue)', letterSpacing: '-.015em', margin: '10px 0 14px', lineHeight: 1.08 }}>
            Números que demonstram <b style={{ fontWeight: 600 }}>escala</b>
          </h2>
          <div style={{ width: 40, height: 3, background: 'var(--grad-accent-line)', borderRadius: 2, margin: '0 0 18px' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--ink-soft)', maxWidth: '40ch', lineHeight: 1.6 }}>
            A ZPE Maranhão concentra infraestrutura logística multimodal com capacidade de expansão planejada e incentivos fiscais federais.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <StatCard label="Investimento previsto" value="R$ 4,2" unit="bi" detail="Até 2030" />
          <StatCard tone="green" label="Expansão" value="40" unit="%" detail="Área adicional planejada" />
          <StatCard label="Área industrial" value="300" unit="ha" />
          <StatCard label="Calado do porto" value="23" unit="m" detail="Entre os maiores do país" />
        </div>
      </div>
    </section>
  );
}

function CtaBand({ onNav }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-blue-to-green)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
      <div className="zpe-grain-dark" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto' }}>
        <Badge variant="green" style={{ background: 'rgba(255,255,255,.12)', color: 'var(--green-soft)' }}>Aberto para instalação</Badge>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(30px,4vw,52px)', letterSpacing: '-.02em', margin: '18px 0 0', lineHeight: 1.02 }}>
          Sua operação exportadora <b style={{ fontWeight: 600 }}>começa aqui</b>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(255,255,255,.7)', marginTop: 16, lineHeight: 1.55 }}>
          Fale com a equipe de relacionamento com investidores e conheça os incentivos disponíveis.
        </p>
        <div style={{ marginTop: 28 }}>
          <Button variant="primary" size="lg" iconRight="→" onClick={() => onNav('oportunidades')}>Quero investir</Button>
        </div>
      </div>
    </section>
  );
}

function Home({ onNav }) {
  return (
    <>
      <Hero onNav={onNav} />
      <InfraSection onNav={onNav} />
      <DataBand />
      <CtaBand onNav={onNav} />
    </>
  );
}
window.Home = Home;
