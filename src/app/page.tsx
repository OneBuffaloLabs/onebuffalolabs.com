// --- Components ---
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import VenturesSection from '@/components/home/VenturesSection';
import LabsAndConceptsSection from '@/components/home/LabsAndConceptsSection';
import ProcessSection from '@/components/home/ProcessSection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ProcessSection />
      <VenturesSection />
      <LabsAndConceptsSection />
      <ContactSection />
    </>
  );
}
