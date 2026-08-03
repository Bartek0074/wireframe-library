import { HeroSection04 } from "@/blocks/HeroSection/HeroSection04/HeroSection04";
import { FeaturesSection03 } from "@/blocks/FeaturesSection/FeaturesSection03/FeaturesSection03";
import { FAQSection07 } from "@/blocks/FAQSection/FAQSection07/FAQSection07";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 gap-24">
      <HeroSection04 />
      <FeaturesSection03 />
      <FAQSection07 />
    </main>
  );
}
