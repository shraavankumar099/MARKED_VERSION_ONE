import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Heart, Clock, Flame } from "lucide-react";
import { books, readingProgress } from "@/data/books";
import { getCover } from "@/data/covers";
import AppHeader from "@/components/AppHeader";
import BookDetailModal from "@/components/BookDetailModal";

const tabs = [
  { id: "reading", label: "Reading", icon: BookOpen },
  { id: "favorites", label: "Favorites", icon: Heart },
  { id: "history", label: "History", icon: Clock },
];

const LibraryPage = () => {
  const [activeTab, setActiveTab] = useState("reading");
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const readingBooks = readingProgress.map((p) => ({ ...books.find((b) => b.id === p.bookId)!, progress: p }));

  return (
    <div className="min-h-screen bg-background pb-24">
      <AppHeader />
      <div className="px-4 pt-4">
        <h1 className="text-xl font-bold font-display text-foreground">Your Library</h1>
        <p className="text-xs text-muted-foreground font-body mt-0.5 flex items-center gap-1">
          <Flame className="w-3 h-3 text-accent-warm" /> 3 day reading streak
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-4 mt-4">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-[20px] text-xs font-semibold font-body transition-all active:scale-95 ${
              activeTab === id
                ? "bg-primary text-primary-foreground shadow-[0_2px_8px_rgba(108,76,241,0.25)]"
                : "bg-[hsl(252,30%,95%)] text-[hsl(252,50%,55%)]"
            }`}
          >
            <Icon className="w-3.5 h-3.5" /> {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-4 mt-4 space-y-3">
        {activeTab === "reading" &&
          readingBooks.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedBook(item.id)}
              className="w-full flex gap-3 bg-card p-3 shadow-card border border-border text-left hover:shadow-elevated transition-shadow duration-200"
              style={{ borderRadius: '14px' }}
            >
              <img src={getCover(item.id)} alt={item.title} className="w-16 h-24 rounded-lg object-cover" loading="lazy" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold font-display text-foreground">{item.title}</h3>
                <p className="text-[11px] text-muted-foreground font-body">{item.author}</p>
                <p className="text-[10px] text-muted-foreground font-body mt-1">
                  Ch. {item.progress.chapter} · {item.progress.lastRead}
                </p>
                <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${item.progress.percent}%` }} />
                </div>
                <p className="text-[10px] text-foreground font-semibold font-body mt-1">{item.progress.percent}% complete</p>
              </div>
            </motion.button>
          ))}

        {activeTab === "favorites" && (
          <div className="text-center py-12">
            <Heart className="w-10 h-10 text-muted-foreground/30 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground font-body">No favorites yet</p>
            <p className="text-xs text-muted-foreground/60 font-body">Tap the heart on any book to save it</p>
          </div>
        )}

        {activeTab === "history" && (
          <div className="text-center py-12">
            <Clock className="w-10 h-10 text-muted-foreground/30 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground font-body">Your reading history will appear here</p>
          </div>
        )}
      </div>

      <BookDetailModal bookId={selectedBook} onClose={() => setSelectedBook(null)} />
    </div>
  );
};

export default LibraryPage;
