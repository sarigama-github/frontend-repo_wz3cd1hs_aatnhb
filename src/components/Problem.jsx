export default function Problem() {
  return (
    <section className="bg-gradient-to-b from-white to-[#4A90E2]/5">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <div className="aspect-[4/3] w-full rounded-xl bg-white border border-[#8C959F]/30 flex items-center justify-center">
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#082C4A] text-white flex items-center justify-center text-2xl font-bold">!</div>
              <p className="text-sm text-[#8C959F]">Imagem sugerida: empreendedor frustrado cercado de papéis e planilhas, olhando para o relógio.</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-[#082C4A] mb-4">Cansado de tarefas manuais consumindo seu tempo?</h2>
          <p className="text-[#082C4A]/80 mb-4">Você atende clientes, faz orçamentos e atualiza planilhas todo dia? Parece que 24 horas não são suficientes. O resultado é que você vive apagando incêndios e nunca tem tempo para planejar, inovar ou vender mais.</p>
          <p className="text-[#082C4A]/80">Quantas vezes já ouviu “sempre fizemos assim” ou “não temos tempo para implantar coisas novas”? No fim do mês, sobra mais estresse do que lucro.</p>
        </div>
      </div>
    </section>
  )
}
