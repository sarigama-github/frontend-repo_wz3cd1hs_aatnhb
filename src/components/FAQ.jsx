export default function FAQ() {
  const items = [
    {
      q: 'Preciso ter conhecimentos de programação?',
      a: 'Não. Nossa solução é completa: você não precisa saber nada de tecnologia. Nós cuidamos de toda a configuração da IA personalizada para o seu negócio.'
    },
    {
      q: 'Quanto tempo leva para ver os resultados?',
      a: 'Em poucas semanas sua operação já fica mais eficiente. Muitos clientes notam ganhos de produtividade logo no primeiro mês.'
    },
    {
      q: 'Funciona para empresas pequenas?',
      a: 'Claro. Easy Flow AI foi feita para empresas de todos os tamanhos. Mesmo negócios pequenos podem automatizar processos simples e sentir o impacto no lucro e no tempo livre.'
    },
  ]

  return (
    <section id="faq" className="bg-gradient-to-t from-white to-[#4A90E2]/5">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#082C4A] mb-10">Perguntas Frequentes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-xl border border-[#8C959F]/30 p-6 bg-white">
              <h3 className="text-lg font-semibold text-[#082C4A] mb-2">{it.q}</h3>
              <p className="text-[#082C4A]/80">{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
