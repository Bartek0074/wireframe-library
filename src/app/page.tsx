import { HeroSection04 } from "@/blocks/HeroSection/HeroSection04/HeroSection04";
import { FeaturesSection06 } from "@/blocks/FeaturesSection/FeaturesSection06/FeaturesSection06";
import { FAQSection07 } from "@/blocks/FAQSection/FAQSection07/FAQSection07";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 gap-24">
      <HeroSection04 />
      <FeaturesSection06 />
      <FAQSection07 />
    </main>
  );
}
