import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Services from '@/components/home/Services';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/shared/CTASection';
import ContactSection from '@/components/home/contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <Services />
      <CaseStudiesPreview />
      <Testimonials />
      <ContactSection/>
    </div>
  );
}