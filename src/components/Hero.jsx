export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-[#8C959F] mb-3">Easy Flow AI</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#082C4A] mb-6">
            Diga adeus às tarefas manuais e acelere suas vendas.
          </h1>
          <p className="text-lg text-[#082C4A]/80 mb-8">
            Você já cansou de perder horas em tarefas repetitivas enquanto vê seus concorrentes avançarem? Agora você pode automatizar processos chatos e focar no que realmente importa: fazer sua empresa crescer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3" id="agendar">
            <a href="#form" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#4A90E2] text-white font-medium hover:brightness-110">
              AGENDAR DEMONSTRAÇÃO
            </a>
            <a href="#beneficios" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[#082C4A] text-[#082C4A] font-medium hover:bg-[#082C4A] hover:text-white transition-colors">
              Ver benefícios
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-[#4A90E2]/15 to-[#082C4A]/15 border border-[#8C959F]/20 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#4A90E2] text-white flex items-center justify-center text-2xl font-bold">AI</div>
              <p className="text-sm text-[#8C959F]">Imagem sugerida: pessoa de negócio aliviada e sorridente em seu escritório, olhando para um laptop com gráficos de crescimento.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
