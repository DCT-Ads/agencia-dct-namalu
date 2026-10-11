import { MeetingLink } from "@/components/ContactLinks";

const FinalCTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          vem ser o nosso próximo <strong className="text-gold">case de sucesso.</strong>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">✅ Contrato somente com aviso prévio</span>
          <span className="flex items-center gap-2">✅ Especialistas sob medida</span>
          <span className="flex items-center gap-2">✅ Cumprimos prazos com agilidade</span>
        </div>

        <MeetingLink
          message="Olá! Quero solicitar uma reunião e ser o próximo case da DCT Namalu Ads."
          className="inline-block bg-green-cta hover:bg-green-cta-hover text-accent-foreground font-bold py-4 px-12 rounded-lg text-lg transition-colors"
        >
          Solicitar uma reunião
        </MeetingLink>
      </div>
    </section>
  );
};

export default FinalCTASection;
