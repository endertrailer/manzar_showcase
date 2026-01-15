import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Activities from "@/components/sections/Activities";
import Gallery from "@/components/sections/Gallery";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <About />
      <Activities />
      <Gallery />
      <Footer />
    </main>
  );
}
