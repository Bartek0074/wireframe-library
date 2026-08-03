import { HeroSection04 } from "@/blocks/HeroSection/HeroSection04/HeroSection04";
import { FeaturesSection02 } from "@/blocks/FeaturesSection/FeaturesSection02/FeaturesSection02";
import { FAQSection07 } from "@/blocks/FAQSection/FAQSection07/FAQSection07";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 gap-24">
      <HeroSection04 />
      <FeaturesSection02 />
      <FAQSection07 />
    </main>
  );
}
