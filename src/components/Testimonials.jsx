export default function Testimonials() {
  const items = [
    {
      quote: 'Economizo horas todos os dias desde que automatizamos nosso atendimento. Agora posso focar em novos projetos em vez de tarefas repetitivas.',
      author: 'Maria',
      role: 'Proprietária de loja de moda'
    },
    {
      quote: 'Com a Easy Flow AI, temos resposta 24h para nossos clientes e percebemos o faturamento subindo. A produtividade dobrou!',
      author: 'Pedro',
      role: 'Consultor financeiro'
    },
    {
      quote: 'Deixamos o robô fazer o trabalho chato. Minha equipe só cuida do que exige estratégia. Foi o melhor investimento que fizemos.',
      author: 'Joana',
      role: 'Empreendedora em tecnologia'
    },
  ]

  return (
    <section id="depoimentos" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#082C4A] mb-10">O que nossos clientes dizem</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <div key={idx} className="rounded-xl border border-[#8C959F]/30 p-6 bg-white">
              <p className="text-[#082C4A]/90 italic mb-4">“{t.quote}”</p>
              <div className="text-sm text-[#8C959F]">— {t.author}, {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
