const differentiators = [
  {
    title: "Serviço pela metade",
    description:
      "Aqui nossa equipe te entrega o serviço completo: Design do seu post e anúncio, legenda e copy, landing page para captar clientes, relatório completo em tempo real e um time sênior para traçar a melhor estratégia.",
  },
  {
    title: 'Tudo no "automático"',
    description:
      "Possuímos um processo detalhado e completo, com estudo prévio da marca e do público-alvo dos nossos clientes, antes de criar qualquer estratégia de redes sociais ou tráfego pago.",
  },
  {
    title: "Te prender em contrato",
    description:
      "Garantimos em contrato a saída dos clientes apenas com aviso prévio, sem letras miúdas. Nossa taxa de satisfação é de 98%, nota 5 no Google.",
  },
  {
    title: "Aventureiros de marketing",
    description:
      "Somos uma agência com propósito único e há 5 anos no mercado. Nossa equipe é formada na área de Publicidade e Marketing, com cursos das melhores ferramentas de marketing digital.",
  },
];

const DifferentiatorsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
          se você busca apenas "uma agência"{" "}
          <strong className="text-gold">nossas soluções</strong> não são para você.
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Entenda melhor a nossa diferença para as outras agências
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="text-destructive">❌</span> {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
