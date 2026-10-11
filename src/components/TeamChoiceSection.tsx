import { MeetingLink } from "@/components/ContactLinks";

const TeamChoiceSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          você escolhe ter um <span className="text-gold">time</span>{" "}
          <strong className="text-gold">compartilhado ou exclusivo.</strong>
        </h2>
        <p className="text-muted-foreground mb-8">para atuar no marketing da sua empresa</p>
        <MeetingLink
          message="Olá! Quero agendar uma reunião para escolher um time compartilhado ou exclusivo na DCT Namalu Ads."
          className="inline-block bg-green-cta hover:bg-green-cta-hover text-accent-foreground font-bold py-4 px-10 rounded-lg text-lg transition-colors"
        >
          Agendar uma reunião
        </MeetingLink>
      </div>

      {/* Ticker */}
      <div className="mt-16 overflow-hidden bg-gold py-4">
        <div className="animate-ticker whitespace-nowrap flex">
          {[1, 2].map((k) => (
            <span key={k} className="text-primary-foreground font-bold text-sm tracking-wide">
              ✔ aumento de visibilidade e faturamento &nbsp;&nbsp;&nbsp; ✔ ações de marketing digital
              &nbsp;&nbsp;&nbsp; ✔ relatórios visuais em tempo real &nbsp;&nbsp;&nbsp; ✔ aumento do
              seu ticket médio, gerando mais lucro &nbsp;&nbsp;&nbsp; ✔ profissionalização do seu
              marketing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamChoiceSection;
