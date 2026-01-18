import { useEffect, useState } from "react";

// Konami Code Hook
export function useKonamiCode(callback: () => void) {
    useEffect(() => {
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let currentIndex = 0;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === konamiCode[currentIndex]) {
                currentIndex++;
                if (currentIndex === konamiCode.length) {
                    callback();
                    currentIndex = 0;
                }
            } else {
                currentIndex = 0;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [callback]);
}

// Secret Word Typing Hook
export function useSecretWord(word: string, callback: () => void) {
    useEffect(() => {
        let typed = '';

        const handleKeyPress = (e: KeyboardEvent) => {
            typed += e.key.toLowerCase();

            if (typed.includes(word.toLowerCase())) {
                callback();
                typed = '';
            }

            // Keep only last 20 characters to prevent memory issues
            if (typed.length > 20) {
                typed = typed.slice(-20);
            }
        };

        window.addEventListener('keypress', handleKeyPress);
        return () => window.removeEventListener('keypress', handleKeyPress);
    }, [word, callback]);
}

// Matrix Rain Effect Component
export function MatrixRain({ active, onComplete }: { active: boolean; onComplete: () => void }) {
    useEffect(() => {
        if (!active) return;

        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.zIndex = '9999';
        canvas.style.pointerEvents = 'none';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d')!;

        const chars = '01アイウエオカキクケコサシスセソタチツテト';
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops: number[] = Array(Math.floor(columns)).fill(1);

        let animationId: number;
        let frameCount = 0;
        const maxFrames = 180; // 3 seconds at 60fps

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff41';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }

            frameCount++;
            if (frameCount < maxFrames) {
                animationId = requestAnimationFrame(draw);
            } else {
                document.body.removeChild(canvas);
                onComplete();
            }
        }

        draw();

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
            if (document.body.contains(canvas)) {
                document.body.removeChild(canvas);
            }
        };
    }, [active, onComplete]);

    return null;
}

// Glitch Effect Component
export function GlitchEffect({ active, onComplete }: { active: boolean; onComplete: () => void }) {
    useEffect(() => {
        if (!active) return;

        const style = document.createElement('style');
        style.textContent = `
      @keyframes glitch-anim {
        0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 2px); }
        20% { clip-path: inset(92% 0 1% 0); transform: translate(2px, -2px); }
        40% { clip-path: inset(43% 0 1% 0); transform: translate(-2px, 2px); }
        60% { clip-path: inset(25% 0 58% 0); transform: translate(2px, -2px); }
        80% { clip-path: inset(54% 0 7% 0); transform: translate(-2px, 2px); }
        100% { clip-path: inset(58% 0 43% 0); transform: translate(0); }
      }
      
      .glitch-active {
        position: relative;
        animation: glitch-anim 0.3s infinite;
      }
      
      .glitch-active::before,
      .glitch-active::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      
      .glitch-active::before {
        animation: glitch-anim 0.3s infinite;
        color: #00ff41;
        z-index: -1;
      }
      
      .glitch-active::after {
        animation: glitch-anim 0.3s infinite reverse;
        color: #bf00ff;
        z-index: -2;
      }
    `;
        document.head.appendChild(style);

        // Apply glitch to all text elements
        const elements = document.querySelectorAll('h1, h2, h3, p');
        elements.forEach(el => {
            if (el.textContent) {
                el.setAttribute('data-text', el.textContent);
                el.classList.add('glitch-active');
            }
        });

        const timeout = setTimeout(() => {
            elements.forEach(el => el.classList.remove('glitch-active'));
            document.head.removeChild(style);
            onComplete();
        }, 2000);

        return () => {
            clearTimeout(timeout);
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
            elements.forEach(el => el.classList.remove('glitch-active'));
        };
    }, [active, onComplete]);

    return null;
}

// Terminal Boot Sequence
export function TerminalBoot({ active, onComplete }: { active: boolean; onComplete: () => void }) {
    const [lines, setLines] = useState<string[]>([]);

    useEffect(() => {
        if (!active) return;

        const bootSequence = [
            '> INITIALIZING SYSTEM...',
            '> LOADING SECTION A9 CORE...',
            '> MOUNTING /dev/creativity',
            '> MOUNTING /dev/innovation',
            '> STARTING SERVICES...',
            '> [OK] Frontend Engine',
            '> [OK] Design System',
            '> [OK] Backend Logic',
            '> SYSTEM READY',
            '> WELCOME TO SECTION A9'
        ];

        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine < bootSequence.length) {
                setLines(prev => [...prev, bootSequence[currentLine]]);
                currentLine++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setLines([]);
                    onComplete();
                }, 1500);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [active, onComplete]);

    if (!active || lines.length === 0) return null;

    return (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center font-mono text-primary p-8">
            <div className="max-w-2xl w-full space-y-2">
                {lines.map((line, i) => (
                    <div key={i} className="animate-pulse">
                        {line}
                    </div>
                ))}
            </div>
        </div>
    );
}

// Debug Console Overlay
export function DebugConsole({ active, onClose }: { active: boolean; onClose: () => void }) {
    if (!active) return null;

    const stats = {
        'Build Time': '7 days',
        'Team Size': '6 members',
        'Lines of Code': '~2,500',
        'Components': '60+',
        'Easter Eggs Found': '🎉 You found one!',
        'Tech Stack': 'React + Vite + Tailwind',
        'Status': 'OPERATIONAL'
    };

    return (
        <div className="fixed bottom-4 right-4 bg-black/95 border-2 border-primary rounded-lg p-6 z-[9999] font-mono text-sm max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-primary font-bold">DEVELOPER CONSOLE</span>
                </div>
                <button
                    onClick={onClose}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                >
                    ✕
                </button>
            </div>

            <div className="space-y-2 text-xs">
                {Object.entries(stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="text-foreground">{value}</span>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-muted-foreground">
                <p>💡 Tip: Try the Konami code!</p>
            </div>
        </div>
    );
}
