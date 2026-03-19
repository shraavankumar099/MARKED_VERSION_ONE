import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";
import { books } from "@/data/books";
import { getCover } from "@/data/covers";

interface TrendingListProps {
  onBookSelect: (bookId: string) => void;
}

const trending = books.filter((b) => b.isTrending).slice(0, 5);

const TrendingList = ({ onBookSelect }: TrendingListProps) => {
  return (
    <section className="px-4 mt-7">
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className="w-4 h-4 text-muted-foreground" />
        <h2 className="text-lg font-bold font-display text-foreground">Trending Now</h2>
      </div>

      <div className="space-y-2.5">
        {trending.map((book, i) => (
          <motion.button
            key={book.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onBookSelect(book.id)}
            className="w-full flex items-center gap-3 bg-card p-3 shadow-card border border-border text-left hover:shadow-elevated transition-shadow duration-200"
            style={{ borderRadius: '14px' }}
          >
            <span className="text-lg font-bold text-muted-foreground/40 font-display w-6 text-center">{i + 1}</span>
            <img src={getCover(book.id)} alt={book.title} className="w-11 h-16 rounded-lg object-cover" loading="lazy" />
            <div className="flex-1 min-w-0">
              <h3 className="text-[13px] font-semibold font-display text-foreground truncate">{book.title}</h3>
              <p className="text-[11px] text-muted-foreground font-body">{book.author}</p>
              <div className="flex items-center gap-2 mt-1 text-[10px] text-muted-foreground font-body">
                <span className="flex items-center gap-0.5"><Star className="w-3 h-3 fill-accent-warm text-accent-warm" /> {book.rating}</span>
                <span>{book.reads} reads</span>
                <span className="px-1.5 py-0.5 rounded-[20px] bg-secondary text-[9px]">{book.mood}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default TrendingList;
