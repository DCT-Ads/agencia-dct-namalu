import teamHero from "@/assets/team-hero.jpg";
import { ScrollLink } from "@/components/ContactLinks";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image sits behind the text and must not intercept clicks */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={teamHero}
          alt="Equipe DCT Namalu"
          className="w-full h-full object-cover object-center"
          width={1024}
          height={768}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <p className="text-gold-light text-lg mb-4">
          deseja <strong>acelerar as vendas</strong> do seu negócio?
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl mb-8">
          criamos um ecossistema de soluções de marketing para{" "}
          <span className="text-gold">alavancar empresas</span> com a nossa ajuda
          <span className="text-gold">.</span>
        </h1>

        <ScrollLink
          targetId="como-funciona"
          className="inline-block bg-green-cta hover:bg-green-cta-hover text-accent-foreground font-bold py-4 px-12 rounded-lg text-lg transition-colors"
        >
          Saiba como funciona
        </ScrollLink>

        <div className="flex items-center gap-4 mt-8">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-bold text-muted-foreground"
              >
                {i}
              </div>
            ))}
          </div>
          <p className="text-sm">
            <strong className="text-foreground">+ 500</strong>{" "}
            <span className="text-muted-foreground">clientes atendidos</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
