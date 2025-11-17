import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full bg-white/90 backdrop-blur border-b border-gray-100 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-[#082C4A] flex items-center justify-center text-white font-bold">EF</div>
          <span className="font-semibold text-[#082C4A]">Easy Flow AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[#082C4A]">
          <a href="#beneficios" className="hover:text-[#4A90E2] transition-colors">Benefícios</a>
          <a href="#depoimentos" className="hover:text-[#4A90E2] transition-colors">Depoimentos</a>
          <a href="#faq" className="hover:text-[#4A90E2] transition-colors">FAQ</a>
        </nav>
        <div className="hidden md:block">
          <a href="#agendar" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#4A90E2] text-white font-medium hover:brightness-110 transition-colors">Agendar demonstração</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded bg-[#082C4A] text-white">
          <span className="sr-only">Abrir menu</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100">
          <nav className="px-4 py-3 flex flex-col gap-3 text-sm text-[#082C4A]">
            <a href="#beneficios" className="hover:text-[#4A90E2] transition-colors">Benefícios</a>
            <a href="#depoimentos" className="hover:text-[#4A90E2] transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-[#4A90E2] transition-colors">FAQ</a>
            <a href="#agendar" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#4A90E2] text-white font-medium">Agendar demonstração</a>
          </nav>
        </div>
      )}
    </header>
  )
}
