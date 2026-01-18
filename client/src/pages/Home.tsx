import { useState } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Activities from "@/components/sections/Activities";
import Gallery from "@/components/sections/Gallery";
import Footer from "@/components/sections/Footer";
import EasterEggHint from "@/components/EasterEggHint";
import {
  useKonamiCode,
  useSecretWord,
  MatrixRain,
  GlitchEffect,
  DebugConsole
} from "@/hooks/useEasterEggs";

export default function Home() {
  const [matrixActive, setMatrixActive] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [debugActive, setDebugActive] = useState(false);

  // Konami Code triggers Matrix rain
  useKonamiCode(() => setMatrixActive(true));

  // Typing "debug" reveals developer console
  useSecretWord("debug", () => setDebugActive(true));

  // Triple-click on section numbers triggers glitch
  const handleSectionClick = (e: React.MouseEvent) => {
    if (e.detail === 3) { // Triple click
      setGlitchActive(true);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Easter Egg Hint Icon */}
      <EasterEggHint />

      <div onClick={handleSectionClick}>
        <Hero />
        <About />
        <Activities />
        <Gallery />
        <Footer />
      </div>

      {/* Easter Egg Effects */}
      <MatrixRain active={matrixActive} onComplete={() => setMatrixActive(false)} />
      <GlitchEffect active={glitchActive} onComplete={() => setGlitchActive(false)} />
      <DebugConsole active={debugActive} onClose={() => setDebugActive(false)} />
    </main>
  );
}
