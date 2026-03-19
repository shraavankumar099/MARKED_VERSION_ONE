import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, BookOpen, TrendingUp } from "lucide-react";
import { books } from "@/data/books";
import { getCover } from "@/data/covers";

interface HeroCarouselProps {
  onBookSelect: (bookId: string) => void;
}

const featured = books.filter((b) => b.isTrending);

const HeroCarousel = ({ onBookSelect }: HeroCarouselProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const book = featured[current];

  return (
    <div className="relative overflow-hidden mx-4 mt-4 shadow-elevated" style={{ borderRadius: '14px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={book.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[280px]"
        >
          <img
            src={getCover(book.id)}
            alt={book.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-[20px] bg-[hsl(45,96%,89%)] text-[hsl(32,95%,35%)] text-[10px] font-semibold font-body flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Trending
              </span>
              <span className="px-2.5 py-0.5 rounded-[20px] bg-white/15 backdrop-blur text-white/80 text-[10px] font-body">
                {book.genre}
              </span>
            </div>

            <h2 className="text-xl font-bold font-display text-white leading-tight">
              {book.title}
            </h2>
            <p className="text-white/60 text-xs font-body mt-1 italic line-clamp-2">
              "{book.hook}"
            </p>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-3 text-white/60 text-[11px] font-body">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-accent-warm text-accent-warm" /> {book.rating}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> {book.reads} reads
                </span>
              </div>
              <button
                onClick={() => onBookSelect(book.id)}
                className="px-5 py-2.5 rounded-[10px] bg-primary text-primary-foreground text-xs font-semibold font-body active:scale-[0.97] transition-all duration-200 shadow-[0_4px_14px_rgba(108,76,241,0.4)] hover:-translate-y-[1px]"
              >
                Start Reading
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute top-4 right-4 flex gap-1.5">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white w-5" : "bg-white/40 w-2"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
