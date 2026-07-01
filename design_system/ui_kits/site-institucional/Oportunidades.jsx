// ZPE Maranhão · Site Institucional — Oportunidades (incentivos + formulário de investidor)
const { Eyebrow, Button, Card, Input, Badge, BrandArrow, GlassPanel, RippleField } = window.ZPEMaranhODesignSystem_408e04;

function Incentivos() {
  const items = [
    { eyebrow: 'Tributário', title: 'Suspensão de impostos', body: 'Suspensão de tributos federais sobre importação e aquisição de bens e serviços para o projeto.' },
    { eyebrow: 'Prazo', title: 'Regime por 20 anos', body: 'Estabilidade do regime tributário da ZPE garantida por duas décadas, prorrogável.' },
    { eyebrow: 'Cambial', title: 'Liberdade cambial', body: 'Tratamento cambial diferenciado para empresas predominantemente exportadoras.' },
  ];
  return (
    <section style={{ background: 'var(--canvas)', padding: '80px 40px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <Eyebrow>Incentivos</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px,3.4vw,40px)', color: 'var(--blue)', letterSpacing: '-.015em', margin: '10px 0 32px', lineHeight: 1.08 }}>
          Por que instalar na <b style={{ fontWeight: 600 }}>ZPE Maranhão</b>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {items.map(i => <Card key={i.title} eyebrow={i.eyebrow} title={i.title}>{i.body}</Card>)}
        </div>
      </div>
    </section>
  );
}

function ProcessoInstalacao() {
  const steps = [
    { n: '01', t: 'Localização', b: 'Selecione um lote urbanizado a 800m do Porto do Itaqui, com utilidades prontas.' },
    { n: '02', t: 'Licenciamento', b: 'Habilitação no regime ZPE com suspensão de tributos federais por 20 anos.' },
    { n: '03', t: 'Instalação', b: 'Infraestrutura de energia, água e telecom para operação industrial intensiva.' },
    { n: '04', t: 'Exportação', b: 'Escoamento multimodal: ferrovia, rodovia e porto profundo.' },
  ];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-aurora-deep)', color: '#fff', padding: '88px 40px' }}>
      <div className="zpe-grain-dark" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
      <RippleField origin="top-right" color="rgba(76,172,75,0.22)" opacity={0.6} count={9} />
      <div style={{ position: 'relative', zIndex: 3, maxWidth: 1120, margin: '0 auto' }}>
        <Eyebrow tone="light">Modelo de operação</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px,3.6vw,44px)', letterSpacing: '-.02em', margin: '12px 0 40px', lineHeight: 1.04, maxWidth: '20ch' }}>
          Da seleção do lote à <b style={{ fontWeight: 600 }}>exportação</b>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {steps.map((s, i) => (
            <GlassPanel key={s.n} number={s.n} title={s.t} accent={i === steps.length - 1}>{s.b}</GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestorForm() {
  const [sent, setSent] = React.useState(false);
  function submit(e) { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3200); }
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-abyss)', color: '#fff', padding: '80px 40px' }}>
      <div className="zpe-grain-dark" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'absolute', right: -30, bottom: -40, opacity: .9, zIndex: 1 }}>
        <BrandArrow size={300} mode="outline" color="rgba(76,172,75,0.14)" />
      </div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Badge variant="green" style={{ background: 'rgba(255,255,255,.12)', color: 'var(--green-soft)' }}>Relacionamento com investidores</Badge>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(30px,3.8vw,48px)', letterSpacing: '-.02em', margin: '18px 0 0', lineHeight: 1.02 }}>
            Fale com nossa <b style={{ fontWeight: 600 }}>equipe</b>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(255,255,255,.65)', marginTop: 16, lineHeight: 1.55, maxWidth: '38ch' }}>
            Envie seus dados e receba o prospecto completo com incentivos, lotes disponíveis e próximos passos para instalação.
          </p>
        </div>
        <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: 32, boxShadow: 'var(--shadow-lg)' }}>
          <form onSubmit={submit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            <Input label="Empresa" placeholder="Razão social" required style={{ gridColumn: '1 / -1' }} />
            <Input label="Nome do responsável" placeholder="Nome completo" required />
            <Input label="Cargo" placeholder="Diretor, gerente…" />
            <Input label="E-mail corporativo" type="email" placeholder="nome@empresa.com" required />
            <Input label="Telefone" placeholder="(98) 90000-0000" />
            <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 4 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--ink-mute)', maxWidth: '28ch' }}>
                {sent ? 'Recebido! Nossa equipe entrará em contato.' : 'Resposta em até 2 dias úteis.'}
              </span>
              <Button variant="primary" iconRight="→" type="submit" style={{ background: sent ? 'var(--green-deep)' : undefined }}>
                {sent ? 'Enviado' : 'Solicitar prospecto'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Oportunidades() {
  return (
    <>
      <Incentivos />
      <ProcessoInstalacao />
      <InvestorForm />
    </>
  );
}
window.Oportunidades = Oportunidades;
