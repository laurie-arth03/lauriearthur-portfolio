import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-sky-500/30">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App;