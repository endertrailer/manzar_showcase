import { motion } from "framer-motion";
import { Terminal, AlertTriangle, Zap, Clock, Activity } from "lucide-react";

export default function Activities() {
  const events = [
    {
      id: "EVT-4091",
      timestamp: "17:30:00",
      type: "INFO",
      process: "Outdoor.exe",
      message: "Physical Training Protocol Initiated",
      stats: {
        "Status": "Touching Grass",
        "Physics": "Enabled",
        "Est. Calories": "450"
      },
      color: "text-green-500",
      border: "border-green-500/30",
      icon: Activity
    },
    {
      id: "EVT-4092",
      timestamp: "19:45:00",
      type: "WARN",
      process: "Logic_Core.sys",
      message: "Checkmate Imminent - High CPU Load",
      stats: {
        "Strategy": "Sicilian Defense",
        "Depth": "12 Moves",
        "Calculate": "99%"
      },
      color: "text-yellow-500",
      border: "border-yellow-500/30",
      icon: AlertTriangle
    },
    {
      id: "EVT-4093",
      timestamp: "22:00:00",
      type: "CRITICAL",
      process: "Lan_Party_Daemon",
      message: "Bandwidth Saturation Detected",
      stats: {
        "Ping": "5ms",
        "Frames": "144fps",
        "Sleep": "Deferred"
      },
      color: "text-red-500",
      border: "border-red-500/30",
      icon: Zap
    }
  ];

  return (
    <section className="py-24 bg-background/95 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />

      <div className="container px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto relative z-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-2 flex items-center justify-center gap-3">
            <span className="text-secondary">03.</span>
            <span>SYSTEM LOGS</span>
          </h2>
          <div className="flex flex-col items-center gap-2">
            <p className="text-muted-foreground font-mono text-sm flex items-center justify-center">
              <span className="animate-pulse mr-2">●</span>
              Live Feed: Off-Duty Protocols
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground bg-white/5 px-4 py-2 rounded mt-2">
              <Clock className="w-3 h-3" />
              <span>UPTIME: 4091h 32m 14s</span>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden md:block -translate-y-1/2" />

          <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-12 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10">
            {events.map((evt, index) => (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`min-w-full md:min-w-[450px] bg-black/80 backdrop-blur-md border ${evt.border} rounded-lg overflow-hidden snap-center relative group`}
              >
                {/* Log Header */}
                <div className="px-4 py-3 bg-white/5 border-b border-white/5 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">[{evt.timestamp}]</span>
                    <span className={`font-bold ${evt.type === 'CRITICAL' ? 'text-red-500' : evt.type === 'WARN' ? 'text-yellow-500' : 'text-green-500'}`}>
                      {evt.type}
                    </span>
                  </div>
                  <span className="text-muted-foreground">{evt.id}</span>
                </div>

                {/* Log Body */}
                <div className="p-6 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded bg-white/5 ${evt.color}`}>
                      <evt.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-mono mb-1">&gt; {evt.process}</div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{evt.message}</h3>
                    </div>
                  </div>



                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                    {Object.entries(evt.stats).map(([key, value]) => (
                      <div key={key} className="bg-white/5 p-2 rounded border border-white/5">
                        <div className="text-muted-foreground mb-1">{key}</div>
                        <div className={evt.color}>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decoration */}
                <div className={`absolute top-0 left-0 w-[2px] h-full ${evt.color.replace('text-', 'bg-')} opacity-50`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
