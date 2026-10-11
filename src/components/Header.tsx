import { MeetingLink, ScrollLink } from "@/components/ContactLinks";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[60] bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <ScrollLink targetId="inicio" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-gold">DCT</span>
          <span className="text-[10px] text-muted-foreground hidden sm:block">NAMALU ADS = TRABALHO - RESULTADOS</span>
        </ScrollLink>
        <MeetingLink
          message="Olá! Quero solicitar uma reunião com a DCT Namalu Ads."
          className="bg-transparent border border-foreground text-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-foreground/10 transition-colors"
        >
          Solicitar reunião
        </MeetingLink>
      </div>
    </header>
  );
};

export default Header;
