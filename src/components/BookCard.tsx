import { motion } from "framer-motion";
import { Star, Flame, Sparkles } from "lucide-react";
import { Book } from "@/data/books";
import { getCover } from "@/data/covers";

interface BookCardProps {
  book: Book;
  index: number;
  onClick: () => void;
}

const BookCard = ({ book, index, onClick }: BookCardProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="text-left transition-shadow duration-200 group"
    >
      <div className="relative overflow-hidden rounded-xl shadow-card group-hover:shadow-elevated transition-shadow duration-200">
        <img
          src={getCover(book.id)}
          alt={book.title}
          className="w-full aspect-[2/3] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-200" />
        {book.isNew && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-[20px] bg-[hsl(142,71%,93%)] text-[hsl(142,71%,30%)] text-[9px] font-bold font-body tracking-wide">
            New
          </span>
        )}
        {book.isTrending && !book.isNew && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-[20px] bg-[hsl(45,96%,89%)] text-[hsl(32,95%,35%)] text-[9px] font-bold font-body tracking-wide flex items-center gap-0.5">
            <Flame className="w-2.5 h-2.5" /> Trending
          </span>
        )}
      </div>
      <h3 className="mt-2 text-[13px] font-semibold font-display text-foreground leading-tight line-clamp-2">
        {book.title}
      </h3>
      <p className="text-[11px] text-muted-foreground font-body mt-0.5">{book.author}</p>
      <div className="flex items-center gap-1 mt-1 text-[11px] text-muted-foreground font-body">
        <Star className="w-3 h-3 fill-accent-warm text-accent-warm" />
        <span>{book.rating}</span>
        <span className="mx-1">·</span>
        <span>{book.reads}</span>
      </div>
    </motion.button>
  );
};

export default BookCard;
