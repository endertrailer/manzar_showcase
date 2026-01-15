import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import footballBg from "@assets/generated_images/futuristic_football_tactical_card.png";
import chessBg from "@assets/generated_images/neon_digital_chessboard.png";
import gamingBg from "@assets/generated_images/cyberpunk_lan_party_abstract.png";

export default function Activities() {
  const cards = [
    {
      title: "Runtime Terrors",
      subtitle: "The Football Team",
      bg: footballBg,
      accent: "border-primary",
      badge: "Tactical Unit",
      textColor: "text-primary"
    },
    {
      title: "Grandmaster's Corner",
      subtitle: "Chess Club",
      bg: chessBg,
      accent: "border-secondary",
      badge: "Risk Level: Caught by Teacher",
      textColor: "text-secondary"
    },
    {
      title: "LAN Party Protocol",
      subtitle: "Gaming & Tech",
      bg: gamingBg,
      accent: "border-blue-500",
      badge: "Connection: Secure",
      textColor: "text-blue-500"
    }
  ];

  return (
    <section className="py-24 bg-background/95 relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-secondary">03.</span> Off-Duty Protocols
          </h2>
          <p className="text-muted-foreground">
            Recharging the system outside the compiler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative h-[400px] rounded-xl overflow-hidden border-2 ${card.accent} bg-card`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={card.bg} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <Badge variant="outline" className="w-fit mb-4 bg-background/50 backdrop-blur border-white/20 text-white">
                  {card.badge}
                </Badge>
                <h3 className={`text-2xl font-bold font-mono mb-1 ${card.textColor} group-hover:text-white transition-colors`}>
                  {card.title}
                </h3>
                <p className="text-lg text-white font-semibold">
                  {card.subtitle}
                </p>
                
                {/* Decoration Lines */}
                <div className="w-full h-[1px] bg-white/20 mt-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/50 w-1/2 h-full animate-[shimmer_2s_infinite]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
