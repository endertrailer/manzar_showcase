import { motion } from "framer-motion";
import { Clock, Users, Code2, Sparkles, Trophy, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import EasterEggHint from "@/components/EasterEggHint";

export default function Story() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    const stagger = {
        show: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const teamMembers = [
        {
            name: "Masoom & Mohammad",
            role: "Frontend Development",
            icon: Code2,
            color: "text-primary",
            description: "Architected the React components and brought the UI to life with smooth animations"
        },
        {
            name: "Kashifa & Ayra",
            role: "UI/UX Design",
            icon: Sparkles,
            color: "text-secondary",
            description: "Crafted the cyberpunk aesthetic and designed the entire visual identity"
        },
        {
            name: "Ali & Yaseen",
            role: "Content & Backend",
            icon: Users,
            color: "text-blue-500",
            description: "Created compelling content and built the backend infrastructure"
        }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Easter Egg Hint Icon */}
            <EasterEggHint />
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                <div className="container px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-8"
                    >
                        <Badge className="bg-primary/10 text-primary border-primary/20 font-mono">
                            Section Cup 2026 · Tech Category
                        </Badge>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono leading-tight">
                            Against the Clock
                            <br />
                            <span className="text-primary">Section A9's Journey</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            How we joined late, formed a team in hours, and built a website we're proud to compete with.
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex items-center justify-center gap-4 text-sm text-muted-foreground font-mono"
                        >
                            <Clock className="w-4 h-4 text-primary" />
                            <span>7 Days</span>
                            <span className="text-primary">·</span>
                            <Users className="w-4 h-4 text-secondary" />
                            <span>6 Team Members</span>
                            <span className="text-primary">·</span>
                            <Code2 className="w-4 h-4 text-blue-500" />
                            <span>1 Mission</span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-primary rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* The Challenge */}
            <section className="py-24 bg-background/95 relative border-t border-white/5">
                <div className="container px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="space-y-12"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 flex items-center justify-center gap-3">
                                <span className="text-primary">01.</span>
                                <span>Late to the Game</span>
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                When opportunity knocks, you don't wait—you break down the door.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
                            <Card className="bg-card/50 border-primary/20 backdrop-blur">
                                <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
                                    <p>
                                        We almost didn't make it. By the time we heard about the Section Cup Tech competition,
                                        <span className="text-primary font-semibold"> registration had already closed</span>.
                                    </p>

                                    <p>
                                        Most teams would have given up. But we weren't most teams. We reached out to the organizers
                                        and explained our situation. Thankfully, <span className="text-secondary font-semibold">they were kind enough</span> to
                                        reopen the forms for us.
                                    </p>

                                    <p>
                                        We had our shot. The clock was ticking, and we had to deliver something <span className="text-primary">exceptional.</span>
                                    </p>

                                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg font-mono text-sm">
                                        <p className="text-primary font-bold mb-2">SYSTEM ALERT</p>
                                        <p className="text-muted-foreground">
                                            Team formation: RUSHED · Coordination: DIFFICULT · Time pressure: MAXIMUM
                                        </p>
                                    </div>

                                    <p>
                                        Roles were assigned in a hurry. Communication channels were set up on the fly.
                                        We didn't have the luxury of perfect planning—we had to <span className="text-secondary font-semibold">adapt,
                                            execute, and deliver</span>.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* The Team */}
            <section className="py-24 bg-background relative">
                <div className="container px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 flex items-center justify-center gap-3">
                                <span className="text-secondary">02.</span>
                                <span>Six Minds, One Mission</span>
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Different skills, different perspectives—united by a common goal.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {teamMembers.map((member, index) => (
                                <motion.div key={index} variants={fadeInUp}>
                                    <Card className="h-full bg-card/50 border-white/10 backdrop-blur hover:bg-card/80 transition-all group">
                                        <CardContent className="p-8 space-y-4">
                                            <div className="flex items-center gap-4">
                                                <div className={`p-3 rounded-lg bg-background/50 ${member.color}`}>
                                                    <member.icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold font-mono text-lg">{member.name}</h3>
                                                    <p className={`text-sm ${member.color}`}>{member.role}</p>
                                                </div>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {member.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={fadeInUp} className="mt-12 text-center">
                            <Card className="bg-secondary/5 border-secondary/20 backdrop-blur max-w-3xl mx-auto">
                                <CardContent className="p-8">
                                    <p className="text-lg leading-relaxed">
                                        We didn't just work together—we <span className="text-secondary font-semibold">collaborated,
                                            problem-solved, and adapted</span> in real-time. When frontend hit a roadblock, design pivoted.
                                        When content needed refinement, backend stepped in. This wasn't just teamwork;
                                        it was <span className="text-primary font-semibold">synchronized execution under pressure</span>.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* The Build */}
            <section className="py-24 bg-background/95 relative border-t border-white/5">
                <div className="container px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 flex items-center justify-center gap-3">
                                <span className="text-primary">03.</span>
                                <span>Seven Days of Code</span>
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Building "The System Core" — where developer aesthetics meet creative polish.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto space-y-8">
                            <Card className="bg-card/50 border-primary/20 backdrop-blur">
                                <CardContent className="p-8 md:p-12 space-y-6">
                                    <h3 className="text-2xl font-bold font-mono text-primary">Tech Stack</h3>
                                    <p className="text-lg leading-relaxed">
                                        We chose modern, battle-tested technologies that would let us move fast without sacrificing quality:
                                    </p>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {[
                                            { name: "React 19", desc: "UI Framework" },
                                            { name: "Vite", desc: "Build Tool" },
                                            { name: "Tailwind CSS", desc: "Styling" },
                                            { name: "Framer Motion", desc: "Animations" }
                                        ].map((tech, i) => (
                                            <div key={i} className="bg-background/50 p-4 rounded-lg border border-white/5 text-center">
                                                <p className="font-mono font-bold text-primary text-sm">{tech.name}</p>
                                                <p className="text-xs text-muted-foreground mt-1">{tech.desc}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg space-y-2">
                                        <p className="font-mono text-sm text-primary font-bold">Design Philosophy: "The System Core"</p>
                                        <p className="text-muted-foreground">
                                            A <span className="text-foreground font-semibold">Cyber-Academic</span> aesthetic that merges
                                            clean VS Code-style developer interfaces with modern creative agency polish.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-mono font-bold text-secondary">Visual Identity</h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <p className="text-sm font-mono text-muted-foreground">COLORS</p>
                                                <div className="flex gap-2">
                                                    <div className="w-12 h-12 rounded bg-[#0a0a0a] border border-white/10" title="Background" />
                                                    <div className="w-12 h-12 rounded bg-[#00ff41] border border-white/10" title="Primary Green" />
                                                    <div className="w-12 h-12 rounded bg-[#bf00ff] border border-white/10" title="Secondary Purple" />
                                                </div>
                                                <p className="text-xs text-muted-foreground">Deep black · Neon green · Electric purple</p>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-sm font-mono text-muted-foreground">TYPOGRAPHY</p>
                                                <p className="font-mono text-primary">Fira Code (Headers)</p>
                                                <p className="font-sans text-secondary">Inter (Body Text)</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* The Website Showcase */}
            <section className="py-24 bg-background relative">
                <div className="container px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 flex items-center justify-center gap-3">
                                <span className="text-secondary">04.</span>
                                <span>Our Digital Manifesto</span>
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Every section tells a story. Every animation has purpose.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "The Hybrid Engine",
                                    subtitle: "Hero Section",
                                    description: "Animated headline with typing effect: 'The Source Code of Section A9' — where 12th Grade Theory meets Diploma Industry Experience. Raw code visually merging into polished UI.",
                                    color: "primary"
                                },
                                {
                                    title: "The Architecture",
                                    subtitle: "About Section",
                                    description: "Bento-box layout showcasing 'The DSY Advantage' (industry experience) and 'The Fresh Perspective' (theoretical innovation). Hardware meets software.",
                                    color: "secondary"
                                },
                                {
                                    title: "Off-Duty Protocols",
                                    subtitle: "System Logs",
                                    description: "A chronological 'System Log' of our downtime. Monitoring events like 'Process Interrupt: Outdoor.exe' and 'Logic Lock: 64-Bit'. Even relaxation is tracked.",
                                    color: "blue-500"
                                },
                                {
                                    title: "DEVELOPERS.EXE",
                                    subtitle: "Active Processes",
                                    description: "An 'Active Processes' terminal displaying our team members as system tasks. Live status updates, CPU usage, and role definitions in a raw data table format.",
                                    color: "primary"
                                },
                                {
                                    title: "Hidden Easter Egg",
                                    subtitle: "Interactive Element",
                                    description: "A hidden chess piece in the footer. Click it and get caught: '-10 Attendance.' Because attention to detail matters, even in the fun stuff.",
                                    color: "secondary"
                                }
                            ].map((section, i) => (
                                <motion.div key={i} variants={fadeInUp}>
                                    <Card className="bg-card/50 border-white/10 backdrop-blur hover:bg-card/80 transition-all">
                                        <CardContent className="p-6 md:p-8">
                                            <div className="flex items-start gap-4">
                                                <div className={`text-${section.color} font-mono text-2xl font-bold mt-1`}>
                                                    {String(i + 1).padStart(2, '0')}
                                                </div>
                                                <div className="flex-1 space-y-2">
                                                    <div>
                                                        <h3 className="text-xl font-bold font-mono">{section.title}</h3>
                                                        <p className={`text-sm text-${section.color}`}>{section.subtitle}</p>
                                                    </div>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {section.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>


                    </motion.div>
                </div>
            </section>

            {/* The Outcome */}
            <section className="py-24 bg-background/95 relative">
                <div className="container px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 flex items-center justify-center gap-3">
                                <span className="text-primary">05.</span>
                                <span>Standing Proud</span>
                            </h2>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
                            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 backdrop-blur">
                                <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
                                    <p>
                                        We started late. We formed our team in hours. We had to hit the ground running.
                                    </p>

                                    <p>
                                        But we didn't just build a website—we built <span className="text-primary font-semibold">proof of what
                                            Section A9 stands for</span>: adaptability, collaboration, and technical excellence under pressure.
                                    </p>

                                    <p>
                                        Every line of code, every design decision, every animation was crafted with purpose.
                                        This isn't just a competition entry. It's a <span className="text-secondary font-semibold">digital
                                            manifesto</span> of who we are and what we're capable of.
                                    </p>

                                    <div className="flex items-center justify-center gap-3 py-6">
                                        <Trophy className="w-8 h-8 text-primary" />
                                        <p className="font-mono text-2xl font-bold text-primary">
                                            Section A9 · Tech Cup 2026
                                        </p>
                                    </div>

                                    <p className="text-center text-xl font-semibold">
                                        We believe we have a <span className="text-primary">real standing chance</span> to win.
                                        And we're ready to prove it.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mt-12 text-center space-y-4">
                            <p className="text-muted-foreground font-mono text-sm">
                                Built with ❤️ by Section A9 · RBU
                            </p>
                            <Link href="/">
                                <Button variant="outline" className="border-primary/20 hover:bg-primary/10 text-primary font-mono">
                                    Back to Home
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
