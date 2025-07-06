import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ProcessSection from '@/components/home/ProcessSection';
import AboutSection from '@/components/home/AboutSection';
import AffiliationsSection from '@/components/home/AffiliationsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ProcessSection />
      <AboutSection />
      <AffiliationsSection />
    </>
  );
}
