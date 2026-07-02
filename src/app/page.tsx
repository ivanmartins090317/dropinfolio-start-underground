import { LanguageProvider } from "@/components/language-context";
import { ScrollRotateBackground } from "@/components/scroll-rotate-background";
import { RafaNavbar } from "@/components/rafa-navbar";
import { RafaMinimalistHero } from "@/components/rafa-minimalist-hero";
import { RafaHero } from "@/components/rafa-hero";
import { RafaResults } from "@/components/rafa-results";
import { RafaUpcoming } from "@/components/rafa-upcoming";
import { RafaMedia } from "@/components/rafa-media";
import { RafaContact } from "@/components/rafa-contact";

export default function Home() {
  return (
    <LanguageProvider>
      <ScrollRotateBackground />
      <main className="relative">
        <RafaNavbar />
        <RafaMinimalistHero />
        <RafaHero />
        <RafaResults />
        <RafaUpcoming />
        <RafaMedia />
        <RafaContact />
      </main>
    </LanguageProvider>
  );
}
