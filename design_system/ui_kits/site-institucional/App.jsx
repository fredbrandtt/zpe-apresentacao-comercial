// ZPE Maranhão · Site Institucional — App shell (navegação entre telas)
function App() {
  const [screen, setScreen] = React.useState('home');
  const nav = (s) => { setScreen(s); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const Screen = { home: window.Home, infra: window.Infraestrutura, oportunidades: window.Oportunidades }[screen];
  return (
    <div style={{ minHeight: '100vh', background: 'var(--canvas)' }}>
      <window.Header current={screen} onNav={nav} />
      <main><Screen onNav={nav} /></main>
      <window.Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
