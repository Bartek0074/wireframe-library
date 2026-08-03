import { HeroSection04 } from "@/blocks/HeroSection/HeroSection04/HeroSection04";
import { FeaturesSection01 } from "@/blocks/FeaturesSection/FeaturesSection01/FeaturesSection01";
import { FAQSection07 } from "@/blocks/FAQSection/FAQSection07/FAQSection07";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection04 />
      <FeaturesSection01 />
      <FAQSection07 />
    </main>
  );
}
