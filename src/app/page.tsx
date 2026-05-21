import HeroSection       from "@/components/home/HeroSection";
import TrustedExpertise  from "@/components/home/TrustedExpertise";
import ServicesPreview   from "@/components/home/ServicesPreview";
import WhyJnanik         from "@/components/home/WhyJnanik";
import ArchitectureSection from "@/components/home/ArchitectureSection";
import IndustryUseCases  from "@/components/home/IndustryUseCases";
import ProcessSection    from "@/components/home/ProcessSection";
import CTASection        from "@/components/home/CTASection";
import ServicesSection  from "@/components/sections/ServicesSection";
import AboutSection     from "@/components/sections/AboutSection";
import CareersSection   from "@/components/sections/CareersSection";
import ContactSection   from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* ─── HOME ─── */}
      <div id="home" data-section>
        <HeroSection />
        <TrustedExpertise />
        <ServicesPreview />
        <WhyJnanik />
        <ArchitectureSection />
        <IndustryUseCases />
        <ProcessSection />
      </div>

      {/* ─── SERVICES ─── */}
      <div id="services" data-section>
        <ServicesSection />
      </div>

      {/* ─── ABOUT ─── */}
      <div id="about" data-section>
        <AboutSection />
      </div>

      {/* ─── CAREERS ─── */}
      <div id="careers" data-section>
        <CareersSection />
      </div>

      {/* ─── CONTACT ─── */}
      <div id="contact" data-section>
        <ContactSection />
        <CTASection />
      </div>
    </>
  );
}
