import HeroSection from "@/components/home/HeroSection";
import TrustedExpertise from "@/components/home/TrustedExpertise";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyJnanik from "@/components/home/WhyJnanik";
import IndustryUseCases from "@/components/home/IndustryUseCases";
import ThoughtLeadership from "@/components/home/ThoughtLeadership";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedExpertise />
      <ServicesPreview />
      <WhyJnanik />
      <IndustryUseCases />
      <ThoughtLeadership />
      <CTASection />
    </>
  );
}
