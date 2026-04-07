// --- Components ---
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
// import PortfolioSection from '@/components/home/PortfolioSection';
// import TestimonialsSection from '@/components/home/TestimonialsSection';
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
      {/* These sections are hidden for now
      <PortfolioSection />
      <TestimonialsSection /> */}
      <LabsAndConceptsSection />
      <AboutSection />
      <ProcessSection />
      <VenturesSection />
      <ContactSection />
    </>
  );
}
