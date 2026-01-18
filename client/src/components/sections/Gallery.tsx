import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Activity, User, Shield, Zap } from "lucide-react";

export default function Gallery() {
  const [hoveredProcess, setHoveredProcess] = useState<number | null>(null);

  const processes = [
    {
      id: 1001,
      user: "Masoom",
      role: "Frontend Architect",
      cpu: "98%",
      mem: "32GB",
      status: "COMPILING",
      desc: "Weaving logic into pixels",
      color: "text-green-500",
      icon: Terminal
    },
    {
      id: 1002,
      user: "Mohammad",
      role: "Frontend Developer",
      cpu: "86%",
      mem: "16GB",
      status: "RENDERING",
      desc: "Forging smooth interactions",
      color: "text-green-500",
      icon: Cpu
    },
    {
      id: 2045,
      user: "Kashifa",
      role: "UI/UX Designer",
      cpu: "94%",
      mem: "64GB",
      status: "DESIGNING",
      desc: "Designing the digital dream",
      color: "text-purple-500",
      icon: User
    },
    {
      id: 2046,
      user: "Ayra",
      role: "Visual Artist",
      cpu: "88%",
      mem: "24GB",
      status: "PAINTING",
      desc: "Crafting the visual identity",
      color: "text-purple-500",
      icon: Zap
    },
    {
      id: 3099,
      user: "Ali",
      role: "Backend Engineer",
      cpu: "99%",
      mem: "128GB",
      status: "SERVING",
      desc: "Powering the system core",
      color: "text-blue-500",
      icon: Shield
    },
    {
      id: 3100,
      user: "Yaseen",
      role: "Content Strategist",
      cpu: "75%",
      mem: "12GB",
      status: "WRITING",
      desc: "Writing the system narrative",
      color: "text-blue-500",
      icon: Activity
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Matrix/Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="container px-4 md:px-8 lg:px-12 max-w-[1200px] mx-auto min-h-[600px] flex flex-col relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-2 flex items-center justify-center gap-3">
            <span className="text-primary">04.</span>
            <span className="text-white">DEVELOPERS.EXE</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-primary font-mono text-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>SYSTEM PROCESSES ACTIVE: {processes.length}</span>
          </div>
        </div>

        {/* Terminal Window */}
        <div className="w-full border border-white/10 rounded-lg bg-black/80 backdrop-blur-md overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="text-xs font-mono text-muted-foreground">task_manager --v 2.0.4</div>
            <div />
          </div>

          {/* Processes List */}
          <div className="p-4 md:p-6 overflow-x-auto">
            <table className="w-full text-left font-mono border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs text-muted-foreground uppercase tracking-wider">
                  <th className="py-3 px-4 w-[100px]">PID</th>
                  <th className="py-3 px-4">USER</th>
                  <th className="py-3 px-4 hidden md:table-cell">ROLE</th>
                  <th className="py-3 px-4 hidden sm:table-cell">CPU</th>
                  <th className="py-3 px-4 hidden lg:table-cell">MEM</th>
                  <th className="py-3 px-4">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {processes.map((proc) => (
                  <motion.tr
                    key={proc.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    onHoverStart={() => setHoveredProcess(proc.id)}
                    onHoverEnd={() => setHoveredProcess(null)}
                    className={`group cursor-default transition-colors duration-200 ${hoveredProcess === proc.id ? 'bg-white/5' : 'hover:bg-white/[0.02]'}`}
                  >
                    <td className="py-4 px-4 text-xs text-muted-foreground font-mono">
                      {proc.id}
                    </td>
                    <td className="py-4 px-4 font-bold text-white flex items-center gap-3">
                      <proc.icon className={`w-4 h-4 ${proc.color}`} />
                      {proc.user}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-400 hidden md:table-cell">
                      {proc.role}
                    </td>
                    <td className="py-4 px-4 text-sm font-mono text-green-500/80 hidden sm:table-cell">
                      {proc.cpu}
                    </td>
                    <td className="py-4 px-4 text-sm font-mono text-purple-500/80 hidden lg:table-cell">
                      {proc.mem}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-col">
                        <span className={`text-xs font-bold ${proc.color} uppercase tracking-wider`}>
                          {hoveredProcess === proc.id ? `> ${proc.status} <` : proc.status}
                        </span>
                        {hoveredProcess === proc.id && (
                          <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="text-[10px] text-gray-500 italic mt-1"
                          >
                            "{proc.desc}"
                          </motion.span>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Terminal Footer */}
          <div className="px-4 py-2 border-t border-white/10 bg-white/5 flex justify-between text-[10px] font-mono text-muted-foreground">
            <span>MEM: 64% USED</span>
            <span className="animate-pulse">_CURSOR ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
