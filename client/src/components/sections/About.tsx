import { motion } from "framer-motion";
import { Cpu, Braces, Server, Network } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-background relative border-t border-white/5">
      <div className="container px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-primary">02.</span> System Architecture
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Our section is built on a dual-core processor: industry experience
            merging with fresh theoretical innovation.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]"
        >
          {/* Card 1: DSY Advantage - Large */}
          <motion.div variants={item} className="md:col-span-2 row-span-2">
            <Card className="h-full bg-card/50 border-primary/20 backdrop-blur hover:bg-card/80 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              <CardHeader className="flex flex-col items-center text-center">
                <Server className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-mono text-primary">
                  The DSY Advantage
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We The DSY know the ancient technique of using Turbo c and
                  Turbo c++
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: Fresh Perspective */}
          <motion.div variants={item} className="md:col-span-1 row-span-2">
            <Card className="h-full bg-card/50 border-secondary/20 backdrop-blur hover:bg-card/80 transition-colors group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 p-24 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-secondary/10 transition-colors" />
              <CardHeader className="flex flex-col items-center text-center">
                <Braces className="w-12 h-12 text-secondary mb-4" />
                <CardTitle className="text-2xl font-mono text-secondary">
                  The Fresh Perspective
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  The 1st-year influx brings new algorithms to our codebase.
                  Unconstrained by legacy systems, they introduce modern
                  theoretical approaches that challenge established protocols.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3: Stats - Hardware */}
          <motion.div variants={item} className="md:col-span-1">
            <Card className="h-full flex flex-col justify-center items-center bg-card/30 border-white/10">
              <Cpu className="w-8 h-8 text-primary mb-2" />
              <div className="text-4xl font-bold font-mono text-foreground">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </Card>
          </motion.div>

          {/* Card 4: Stats - Software */}
          <motion.div variants={item} className="md:col-span-1">
            <Card className="h-full flex flex-col justify-center items-center bg-card/30 border-white/10">
              <Network className="w-8 h-8 text-secondary mb-2" />
              <div className="text-4xl font-bold font-mono text-foreground">
                ∞
              </div>
              <div className="text-sm text-muted-foreground">Potential</div>
            </Card>
          </motion.div>

          {/* Card 5: Stats - Coffee */}
          <motion.div variants={item} className="md:col-span-1">
            <Card className="h-full flex flex-col justify-center items-center bg-card/30 border-white/10">
              <div className="text-4xl font-bold font-mono text-foreground">
                404
              </div>
              <div className="text-sm text-muted-foreground">
                Sleep Not Found
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
