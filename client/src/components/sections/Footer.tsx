import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Ghost } from "lucide-react";

export default function Footer() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  return (
    <footer className="py-12 border-t border-white/10 bg-background text-center relative">
      <div className="container px-4">
        <p className="text-muted-foreground font-mono text-sm">
          © 2026 Section Source Code. System Status: <span className="text-primary">OPERATIONAL</span>
        </p>
        
        {/* Easter Egg Trigger */}
        <button 
            onClick={() => setShowEasterEgg(true)}
            className="absolute bottom-4 right-4 opacity-10 hover:opacity-100 transition-opacity duration-500"
            data-testid="easter-egg-trigger"
        >
            <Ghost className="w-4 h-4 text-white" />
        </button>

        <Dialog open={showEasterEgg} onOpenChange={setShowEasterEgg}>
          <DialogContent className="border-destructive/50 bg-destructive/10 backdrop-blur-xl">
            <DialogHeader>
              <DialogTitle className="text-destructive font-mono text-xl">⚠️ ALERT: VIOLATION DETECTED</DialogTitle>
              <DialogDescription className="text-foreground font-mono mt-4 text-lg">
                "You have been caught playing chess! -10 Attendance."
                <br/>
                <br/>
                <span className="text-xs text-muted-foreground">System Admin is watching...</span>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </footer>
  );
}
