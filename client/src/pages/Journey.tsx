import { motion } from "framer-motion";
import { ArrowLeft, Terminal, Cpu, Users, Code, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Journey() {
    return (
        <div className="min-h-screen bg-background text-foreground font-mono selection:bg-primary/30">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-sm bg-background/50 border-b border-white/5">
                <Link href="/">
                    <Button variant="ghost" className="hover:bg-white/5 gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Return to Core</span>
                    </Button>
                </Link>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    SYSTEM_LOG: A9_STORY
                </div>
            </nav>

            <main className="container max-w-4xl px-4 pt-32 pb-20 mx-auto">

                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs mb-8">
                        <Terminal className="w-3 h-3" />
                        <span>EXECUTING: LATE_ENTRY_PROTOCOL</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        The Sprint of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Section A9</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Where 12th Grade Theory meets Diploma Industry Experience.
                        <span className="block mt-2 text-lg opacity-80">A story of late starts, caffeine, and compiling under pressure.</span>
                    </p>
                </motion.section>

                {/* The Challenge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid gap-12 md:gap-24"
                >
                    <section className="relative pl-8 border-l-2 border-white/10">
                        <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-background border-2 border-primary" />
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <Zap className="text-yellow-500" />
                            The Late Entry
                        </h2>
                        <div className="prose prose-invert max-w-none text-muted-foreground">
                            <p className="mb-4">
                                We weren't supposed to be here. The registration forms were closed. The teams were solidified.
                                Section A9 was effectively out of the Tech Cup before it began.
                            </p>
                            <p>
                                But we refused to accept a syntax error in our designated path. We personally requested the
                                organizers to reopen the portal. Once that commit was pushed, we had a team—but we generated
                                massive technical debt: <strong>Time</strong>. While others had weeks, we had days.
                            </p>
                        </div>
                    </section>

                    {/* The Visual Identity */}
                    <section className="relative pl-8 border-l-2 border-white/10">
                        <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-background border-2 border-secondary" />
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Cpu className="text-secondary" />
                            The System Core
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-card/50 p-6 rounded-xl border border-white/5">
                                <h3 className="font-bold mb-2 text-primary">Aesthetic</h3>
                                <p className="text-sm text-muted-foreground">
                                    A simple yet modern dark-themed aesthetic. We focused on deep and dark backgrounds with neon terminal accents to create a clean, professional look that balances creativity with technical precision.
                                </p>
                            </div>
                            <div className="bg-card/50 p-6 rounded-xl border border-white/5">
                                <h3 className="font-bold mb-2 text-secondary">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["React 19", "Vite", "Tailwind", "Framer Motion", "Express"].map((tech) => (
                                        <span key={tech} className="px-2 py-1 rounded bg-white/5 text-xs border border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* The Team */}
                    <section className="relative pl-8 border-l-2 border-white/10">
                        <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-background border-2 border-blue-500" />
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Users className="text-blue-500" />
                            The Contributors
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div className="p-4 bg-white/5 rounded-lg">
                                <div className="font-bold text-lg mb-1">Masoom & Mohammad</div>
                                <div className="text-xs text-primary uppercase tracking-wider mb-2">Frontend Architects</div>
                                <p className="text-sm text-muted-foreground">Turning visual dreams into responsive reality.</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-lg">
                                <div className="font-bold text-lg mb-1">Kashifa & Ayra</div>
                                <div className="text-xs text-secondary uppercase tracking-wider mb-2">UI/UX & Design</div>
                                <p className="text-sm text-muted-foreground">Visual planning, layout structure, and aesthetic direction.</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-lg">
                                <div className="font-bold text-lg mb-1">Ali & Yaseen</div>
                                <div className="text-xs text-blue-400 uppercase tracking-wider mb-2">Backend & Content</div>
                                <p className="text-sm text-muted-foreground">Logic flow and the voice of the section.</p>
                            </div>
                        </div>
                    </section>

                    {/* The Result */}
                    <section className="relative pl-8 border-l-2 border-white/10 pb-12">
                        <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-background border-2 border-green-500" />
                        <div className="absolute bottom-0 left-[-2px] w-[2px] h-full bg-gradient-to-b from-white/10 to-transparent" />

                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <Code className="text-green-500" />
                            Build Complete
                        </h2>
                        <div className="prose prose-invert max-w-none text-muted-foreground">
                            <p>
                                Despite the late start, the coordination chaos, and the pressure—we shipped.
                                This website isn't just a project entry; it's proof that Section A9 can adapt,
                                collaborate, and execute under fire.
                            </p>
                            <p className="text-lg font-bold text-white mt-4">
                                We are Section A9. And we are ready to compete.
                            </p>
                        </div>
                    </section>
                </motion.div>

                {/* Footer */}
                <div className="mt-20 pt-10 border-t border-white/5 text-center">
                    <Link href="/">
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Explore the System
                        </Button>
                    </Link>
                </div>
            </main>
        </div>
    );
}
