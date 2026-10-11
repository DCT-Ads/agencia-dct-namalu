import { MeetingLink } from "@/components/ContactLinks";

const services = [
  {
    title: "gestão de redes sociais",
    highlight: "redes sociais",
    items: ["planejamento", "criação de post e stories", "moderação e agendamento", "relatórios e otimização"],
  },
  {
    title: "criação de site para anúncios",
    highlight: "site para anúncios",
    items: ["para leads ou vendas", "carrega muito rápido", "alta taxa de conversão", "CRM incluso"],
  },
  {
    title: "gestão de tráfego pago",
    highlight: "tráfego pago",
    items: ["plano de campanhas", "criativos e copy inclusos", "orientados a resultados", "mensuramos seu ROI"],
  },
  {
    title: "produção de fotos e vídeos",
    highlight: "fotos e vídeos",
    items: ["fotógrafo e videomaker", "elaboração de roteiro", "edição de conteúdo", "entrega de alta qualidade"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 flex flex-col">
              <h3 className="text-lg font-bold mb-4">
                {service.title.replace(service.highlight, "")}{" "}
                <span className="text-gold">{service.highlight}</span>
              </h3>
              <ul className="space-y-2 mb-6 flex-1">
                {service.items.map((item, j) => (
                  <li key={j} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <MeetingLink
                message={`Olá! Tenho interesse em ${service.title} com a DCT Namalu Ads.`}
                className="bg-green-cta hover:bg-green-cta-hover text-accent-foreground font-semibold py-3 rounded-lg text-center text-sm transition-colors"
              >
                Tenho interesse
              </MeetingLink>
            </div>
          ))}
        </div>

        {/* Custom plan */}
        <div className="bg-card border border-gold rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">
            <span className="text-gold">plano customizado</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            converse com a nossa equipe para personalizar os seus serviços para a sua necessidade
          </p>
          <MeetingLink
            message="Olá! Quero agendar uma reunião com a equipe da DCT Namalu Ads para um plano customizado."
            className="inline-block bg-green-cta hover:bg-green-cta-hover text-accent-foreground font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Agendar reunião com a equipe
          </MeetingLink>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
