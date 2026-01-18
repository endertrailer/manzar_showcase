import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function EasterEggHint() {
    const [showHints, setShowHints] = useState(false);

    return (
        <>
            {/* Glitchy Icon in Top-Left */}
            <button
                onClick={() => setShowHints(true)}
                className="fixed top-4 left-4 z-50 w-6 h-6 cursor-pointer group"
                title="???"
                aria-label="Easter egg hints"
            >
                <div className="relative w-full h-full">
                    {/* Main icon */}
                    <Sparkles className="w-6 h-6 text-primary/40 group-hover:text-primary transition-all duration-300 animate-pulse" />

                    {/* Glitch effect on hover */}
                    <Sparkles
                        className="w-6 h-6 text-secondary/30 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                            transform: 'translate(1px, -1px)',
                            animation: 'glitch-icon 0.3s infinite'
                        }}
                    />
                    <Sparkles
                        className="w-6 h-6 text-primary/30 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                            transform: 'translate(-1px, 1px)',
                            animation: 'glitch-icon 0.3s infinite reverse'
                        }}
                    />
                </div>
            </button>

            {/* Hints Dialog */}
            <Dialog open={showHints} onOpenChange={setShowHints}>
                <DialogContent className="border-primary/20 bg-background/95 backdrop-blur-xl max-w-md">
                    <DialogHeader>
                        <DialogTitle className="font-mono text-primary flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            Hidden Easter Eggs
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4 text-sm">
                        <p className="text-muted-foreground">
                            You found the hint system! Here are all the hidden interactions:
                        </p>

                        <div className="space-y-3">
                            {/* Easter Egg 1 */}
                            <div className="bg-card/50 border border-white/5 rounded-lg p-3 space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                    <span className="font-mono text-xs text-primary">KONAMI CODE</span>
                                </div>
                                <p className="text-xs text-muted-foreground pl-4">
                                    Press: <code className="text-foreground">↑ ↑ ↓ ↓ ← → ← → B A</code>
                                </p>
                                <p className="text-xs text-muted-foreground pl-4">
                                    Effect: Matrix rain animation
                                </p>
                            </div>

                            {/* Easter Egg 2 */}
                            <div className="bg-card/50 border border-white/5 rounded-lg p-3 space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-secondary rounded-full" />
                                    <span className="font-mono text-xs text-secondary">DEBUG MODE</span>
                                </div>
                                <p className="text-xs text-muted-foreground pl-4">
                                    Type: <code className="text-foreground">debug</code> (anywhere on page)
                                </p>
                                <p className="text-xs text-muted-foreground pl-4">
                                    Effect: Developer console appears
                                </p>
                            </div>

                            {/* Easter Egg 3 */}
                            <div className="bg-card/50 border border-white/5 rounded-lg p-3 space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                    <span className="font-mono text-xs text-primary">SYSTEM BOOT</span>
                                </div>
                                <p className="text-xs text-muted-foreground pl-4">
                                    Click: <code className="text-foreground">SYSTEM.INIT(A9)</code> in hero section
                                </p>
                                <p className="text-xs text-muted-foreground pl-4">
                                    Effect: Terminal boot sequence
                                </p>
                            </div>

                            {/* Easter Egg 4 */}
                            <div className="bg-card/50 border border-white/5 rounded-lg p-3 space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-secondary rounded-full" />
                                    <span className="font-mono text-xs text-secondary">GLITCH</span>
                                </div>
                                <p className="text-xs text-muted-foreground pl-4">
                                    Action: <code className="text-foreground">Triple-click</code> anywhere
                                </p>
                                <p className="text-xs text-muted-foreground pl-4">
                                    Effect: Cyberpunk glitch effect
                                </p>
                            </div>
                        </div>

                        <div className="pt-3 border-t border-white/5">
                            <p className="text-xs text-muted-foreground text-center">
                                💡 Try them all and see what happens!
                            </p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Glitch animation keyframes */}
            <style>{`
        @keyframes glitch-icon {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(2px, -2px); }
          50% { transform: translate(-2px, 2px); }
          75% { transform: translate(2px, 1px); }
        }
      `}</style>
        </>
    );
}
