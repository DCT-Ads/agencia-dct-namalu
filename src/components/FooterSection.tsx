import { MeetingLink } from "@/components/ContactLinks";
import { WORK_EMAIL, whatsappLink } from "@/lib/contact";

const FooterSection = () => {
  const whatsapp = whatsappLink("Olá! Quero falar com a DCT Namalu Ads.");

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-2xl font-extrabold tracking-tight text-gold">DCT</p>
          <p className="text-xs text-muted-foreground mt-1">NAMALU ADS = TRABALHO - RESULTADOS</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {whatsapp && (
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer relative z-20 bg-green-cta hover:bg-green-cta-hover text-accent-foreground font-semibold px-5 py-2.5 rounded-full text-sm text-center"
            >
              WhatsApp
            </a>
          )}
          <a
            href={`mailto:${WORK_EMAIL}`}
            className="cursor-pointer relative z-20 border border-foreground text-foreground font-semibold px-5 py-2.5 rounded-full text-sm text-center hover:bg-foreground/10 transition-colors"
          >
            {WORK_EMAIL}
          </a>
          <MeetingLink
            message="Olá! Quero solicitar uma reunião com a DCT Namalu Ads."
            className="border border-gold text-gold font-semibold px-5 py-2.5 rounded-full text-sm text-center hover:bg-gold/10 transition-colors"
          >
            Solicitar reunião
          </MeetingLink>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
