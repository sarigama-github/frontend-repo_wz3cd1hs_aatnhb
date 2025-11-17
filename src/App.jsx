import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#082C4A]">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <Testimonials />
        <FAQ />
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Não perca tempo: comece agora mesmo a economizar e crescer!</h2>
            <a href="#form" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#4A90E2] text-white font-medium hover:brightness-110">AGENDAR DEMONSTRAÇÃO</a>
          </div>
        </section>
        <section id="form" className="bg-gradient-to-b from-white to-[#4A90E2]/5">
          <div className="max-w-2xl mx-auto px-4 py-16">
            <div className="rounded-xl border border-[#8C959F]/30 bg-white p-6">
              <h3 className="text-2xl font-semibold mb-4">Agende sua demonstração</h3>
              <form className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input className="w-full border border-[#8C959F]/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]" placeholder="Nome" />
                  <input className="w-full border border-[#8C959F]/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]" placeholder="Email" />
                </div>
                <input className="w-full border border-[#8C959F]/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]" placeholder="Empresa" />
                <textarea className="w-full border border-[#8C959F]/40 rounded-md px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]" placeholder="Como podemos ajudar?" />
                <button type="button" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#082C4A] text-white font-medium hover:brightness-110">Enviar</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#8C959F]/20 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-[#8C959F] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Easy Flow AI. Todos os direitos reservados.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#4A90E2]">Privacidade</a>
            <a href="#" className="hover:text-[#4A90E2]">Termos</a>
            <a href="#" className="hover:text-[#4A90E2]">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
