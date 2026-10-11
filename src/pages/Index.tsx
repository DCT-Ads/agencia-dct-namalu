import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FormSection from "@/components/FormSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import StrategySection from "@/components/StrategySection";
import ServicesSection from "@/components/ServicesSection";
import TeamChoiceSection from "@/components/TeamChoiceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsSection from "@/components/ClientsSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <FormSection />
      <DifferentiatorsSection />
      <StrategySection />
      <ServicesSection />
      <TeamChoiceSection />
      <TestimonialsSection />
      <ClientsSection />
      <FinalCTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
