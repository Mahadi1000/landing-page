import AnimatedSection from "@/components/animated-section";
import DashboardPreview from "@/components/dashboard-preview";
import EnhancedHeroSection from "@/components/enhanced-hero-section";
import FloatingElements from "@/components/floating-elements";
import { InteractiveBentoSection } from "@/components/interactive-bento-section";
import { InteractiveCursor } from "@/components/interective-cursor";
import SocialProof from "@/components/social-proof";

export default function Home() {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden  ">
      <div>
        <InteractiveCursor />
        <FloatingElements />
      </div>
      <div className="relative z-10">
        <main className="max-w-[1320px] 2xl:max-w-[1440px] mx-auto relative">
          <EnhancedHeroSection />
          {/* dashboard preview wrapper  */}
          <div className="absolute bottom-[-150px] md:bottom-[-400px] left-1/2 transform -translate-x-1/2 z-30">
            <AnimatedSection>
              <DashboardPreview />
            </AnimatedSection>
          </div>
        </main>
        <AnimatedSection
          className="relative z-10 max-w-[1320px] 2xl:max-w-[1440px] mx-auto mt-[411px] md:[400px] px-6"
          delay={0.1}
        >
          <SocialProof />
        </AnimatedSection>

        <AnimatedSection id="features-section">
          <InteractiveBentoSection />
        </AnimatedSection>

      </div>
    </div>
  );
}
