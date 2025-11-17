export default function Benefits() {
  const items = [
    {
      title: 'Mais tempo livre',
      desc: 'Sua rotina fica mais leve: a IA assume todos os passos repetitivos, e você recupera horas todos os dias. Resultado? Você finalmente consegue dar atenção às novidades do mercado e dos seus clientes.',
      hint: 'Imagem sugerida: empresário relaxando ou trabalhando criativamente, enquanto um grande relógio em segundo plano marca menos horas.'
    },
    {
      title: 'Vendas e atendimento 24 horas',
      desc: 'Responda seus clientes a qualquer hora, mesmo quando você estiver fora do escritório. Leads são atendidos imediatamente e nada escapa do radar.',
      hint: 'Imagem sugerida: notificações de mensagens sendo respondidas automaticamente.'
    },
    {
      title: 'Cresça sem custos extras',
      desc: 'Aumento de demanda não exige contratar mais gente. A IA cuida da parte operacional e você vê os resultados.',
      hint: 'Imagem sugerida: gráfico subindo ao fundo, empresário apontando para os números.'
    },
  ]

  return (
    <section id="beneficios" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#082C4A] mb-10">Deixe a inteligência artificial cuidar do trabalho pesado</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-xl border border-[#8C959F]/30 p-6 bg-white hover:shadow-sm transition-shadow">
              <h3 className="text-xl font-semibold text-[#082C4A] mb-2">{it.title}</h3>
              <p className="text-[#082C4A]/80 mb-3">{it.desc}</p>
              <p className="text-sm text-[#8C959F]">{it.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
