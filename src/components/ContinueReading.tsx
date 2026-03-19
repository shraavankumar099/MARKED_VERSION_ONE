import { motion } from "framer-motion";
import { BookOpen, Clock } from "lucide-react";
import { books, readingProgress } from "@/data/books";
import { getCover } from "@/data/covers";

interface ContinueReadingProps {
  onBookSelect: (bookId: string) => void;
}

const ContinueReading = ({ onBookSelect }: ContinueReadingProps) => {
  if (readingProgress.length === 0) return null;

  return (
    <section className="px-4 mt-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold font-display text-foreground">Continue Reading</h2>
        <button className="text-xs text-muted-foreground font-body hover:text-foreground transition-colors">See all</button>
      </div>

      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
        {readingProgress.map((progress, i) => {
          const book = books.find((b) => b.id === progress.bookId);
          if (!book) return null;

          return (
            <motion.button
              key={book.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onBookSelect(book.id)}
              className="flex-shrink-0 w-[260px] bg-card p-3 flex gap-3 text-left shadow-card border border-border hover:shadow-elevated transition-shadow duration-200"
              style={{ borderRadius: '14px' }}
            >
              <img
                src={getCover(book.id)}
                alt={book.title}
                className="w-14 h-20 rounded-lg object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-[13px] font-semibold font-display text-foreground truncate">{book.title}</h3>
                <p className="text-[11px] text-muted-foreground font-body mt-0.5">{book.author}</p>

                <div className="flex items-center gap-1 mt-1.5 text-[10px] text-muted-foreground font-body">
                  <Clock className="w-3 h-3" />
                  <span>{progress.lastRead}</span>
                </div>

                <div className="mt-2">
                  <div className="flex items-center justify-between text-[10px] font-body mb-1">
                    <span className="text-muted-foreground">Ch. {progress.chapter}, ¶{progress.paragraph}</span>
                    <span className="text-foreground font-semibold">{progress.percent}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${progress.percent}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default ContinueReading;
