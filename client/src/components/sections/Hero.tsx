import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Terminal } from "lucide-react";
import heroBg from "@assets/generated_images/cyberpunk_code_merging_with_clean_ui.png";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "The Source Code of Section A9";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cyberpunk Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-primary mb-4 font-mono text-sm tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>SYSTEM.INIT(A9)</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter leading-tight mb-4 min-h-[120px] md:min-h-[160px]">
              {text}
              <span className="animate-pulse text-primary">_</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Where 12th Grade Theory meets{" "}
              <span className="text-secondary font-semibold">
                Diploma Industry Experience
              </span>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex gap-4"
          >

            <Link href="/journey">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 hover:bg-primary/10 text-primary font-mono"
              >
                Our Journey Blogpost
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right: Visual Abstract */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Decorative code block visual */}
            <div className="absolute inset-0 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 font-mono text-xs text-primary/80 shadow-2xl overflow-hidden">
              <div className="opacity-50 select-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="mb-2">
                    <span className="text-muted-foreground mr-4">{i + 1}</span>
                    <span style={{ marginLeft: `${Math.random() * 40}px` }}>
                      const future = new Promise((resolve) =&gt; ...
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating UI Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 top-20 bg-secondary/10 border border-secondary/50 p-4 rounded-xl backdrop-blur-md shadow-lg w-64"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                <span className="text-secondary font-bold text-sm">
                  Compiling Success...
                </span>
              </div>
              <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="h-full bg-secondary"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
