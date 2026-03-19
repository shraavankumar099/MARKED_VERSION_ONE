import { Search, Bell, User } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AppHeaderProps {
  onSearchChange?: (query: string) => void;
}

const AppHeader = ({ onSearchChange }: AppHeaderProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border px-4 py-3">
      <div className="flex items-center justify-between max-w-mobile mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-[10px] bg-primary flex items-center justify-center shadow-[0_2px_8px_rgba(108,76,241,0.25)]">
            <span className="text-primary-foreground font-bold text-sm font-body">M</span>
          </div>
          <div>
            <h1 className="text-[15px] font-bold font-body text-foreground tracking-[0.08em] uppercase leading-none">Marked</h1>
            <p className="text-[9px] text-muted-foreground font-body tracking-[0.05em] mt-0.5">Read. Remember.</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center transition-colors active:scale-95"
          >
            <Search className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center relative active:scale-95">
            <Bell className="w-4 h-4 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive" />
          </button>
          <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center active:scale-95 shadow-[0_2px_8px_rgba(108,76,241,0.25)]">
            <User className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden max-w-mobile mx-auto"
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                onSearchChange?.(e.target.value);
              }}
              placeholder="Search novels, authors, genres..."
              className="w-full mt-3 px-4 py-2.5 rounded-[10px] bg-secondary text-foreground placeholder:text-muted-foreground text-sm font-body outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AppHeader;
