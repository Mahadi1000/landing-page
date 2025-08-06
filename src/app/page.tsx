import EnhancedHeroSection from "@/components/enhanced-hero-section";
import FloatingElements from "@/components/floating-elements";
import { InteractiveCursor } from "@/components/interective-cursor";

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
        </main>
      </div>
    </div>
  );
}
