import { MeetingLink } from "@/components/ContactLinks";

const strategies = [
  {
    icon: "📍",
    title: "Diagnóstico completo",
    description:
      "Mapeamos os principais gargalos do seu negócio em marketing e vendas para definirmos um plano de ação assertivo.",
  },
  {
    icon: "🧠",
    title: "Estratégia sob medida",
    description:
      "Nada de copiar fórmula pronta. Criamos um plano estratégico personalizado com foco em crescimento, posicionamento e vendas.",
  },
  {
    icon: "📊",
    title: "Estrutura de marketing e vendas",
    description:
      "Organizamos todo o seu funil de marketing de conteúdo e tráfego pago nas redes sociais e em buscadores como o Google.",
  },
  {
    icon: "🛠",
    title: "Execução qualificada",
    description:
      "Construímos uma equipe de alta performance, preparada para fazer o que precisa ser feito — sem enrolação ou ideias soltas.",
  },
];

const StrategySection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          planos personalizados <strong className="text-gold">para seu crescimento.</strong>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          <strong className="text-foreground">Marketing</strong> não será mais um problema, pois com
          nossa agência <strong className="text-foreground">você terá acesso a tudo isso aqui:</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {strategies.map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-gold transition-colors">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <MeetingLink
            message="Olá! Quero solicitar uma reunião com a DCT Namalu Ads."
            className="inline-block bg-green-cta hover:bg-green-cta-hover text-accent-foreground font-bold py-4 px-10 rounded-lg text-lg transition-colors"
          >
            Solicitar uma reunião
          </MeetingLink>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
