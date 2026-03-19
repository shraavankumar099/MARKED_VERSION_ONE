import { motion, AnimatePresence } from "framer-motion";
import { X, Star, BookOpen, Heart, Bookmark, Sparkles } from "lucide-react";
import { books } from "@/data/books";
import { getCover } from "@/data/covers";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface BookDetailModalProps {
  bookId: string | null;
  onClose: () => void;
}

const BookDetailModal = ({ bookId, onClose }: BookDetailModalProps) => {
  const navigate = useNavigate();
  const book = books.find((b) => b.id === bookId);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!book) return null;

  const related = books.filter((b) => b.genre === book.genre && b.id !== book.id).slice(0, 4);

  return (
    <AnimatePresence>
      {bookId && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/40 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-background max-h-[90vh] overflow-y-auto"
            style={{ borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}
          >
            <div className="max-w-mobile mx-auto">
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 rounded-full bg-border" />
              </div>

              {/* Close */}
              <button onClick={onClose} className="absolute right-4 top-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center active:scale-95 transition-transform">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>

              {/* Cover + Info */}
              <div className="px-5 pt-2 pb-4 flex gap-4">
                <img src={getCover(book.id)} alt={book.title} className="w-28 h-40 rounded-xl object-cover shadow-elevated flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold font-display text-foreground leading-tight">{book.title}</h2>
                  <p className="text-sm text-muted-foreground font-body mt-1">{book.author}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground font-body">
                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-accent-warm text-accent-warm" /> {book.rating}</span>
                    <span>{book.reads} reads</span>
                    <span>{book.chapters} ch.</span>
                  </div>
                  <div className="flex gap-1.5 mt-2 flex-wrap">
                    {book.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-[20px] bg-secondary text-[10px] text-secondary-foreground font-body">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="px-5 flex gap-3">
                <button
                  onClick={() => { onClose(); navigate(`/read/${book.id}`); }}
                  className="flex-1 py-3 rounded-[10px] bg-primary text-primary-foreground text-sm font-semibold font-body flex items-center justify-center gap-2 active:scale-[0.97] transition-all duration-200 shadow-[0_4px_12px_rgba(108,76,241,0.3)] hover:-translate-y-[1px]"
                >
                  <BookOpen className="w-4 h-4" /> Start Reading
                </button>
                <button
                  onClick={() => setLiked(!liked)}
                  className={`w-12 h-12 rounded-[10px] flex items-center justify-center active:scale-90 transition-all duration-200 ${liked ? 'bg-destructive/10 text-destructive' : 'bg-[hsl(252,30%,95%)] text-[hsl(252,50%,55%)]'}`}
                >
                  <Heart className={`w-5 h-5 transition-all duration-200 ${liked ? 'fill-current scale-110' : ''}`} />
                </button>
                <button
                  onClick={() => setSaved(!saved)}
                  className={`w-12 h-12 rounded-[10px] flex items-center justify-center active:scale-90 transition-all duration-200 ${saved ? 'bg-primary/10 text-primary' : 'bg-[hsl(252,30%,95%)] text-[hsl(252,50%,55%)]'}`}
                >
                  <Bookmark className={`w-5 h-5 transition-all duration-200 ${saved ? 'fill-current scale-110' : ''}`} />
                </button>
              </div>

              {/* Hook */}
              <div className="px-5 mt-5">
                <div className="bg-secondary/60 p-4" style={{ borderRadius: '14px' }}>
                  <p className="text-xs font-semibold text-foreground font-body mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-accent-warm" /> Why you'll love this
                  </p>
                  <p className="text-sm text-muted-foreground font-body italic">"{book.hook}"</p>
                </div>
              </div>

              {/* Description */}
              <div className="px-5 mt-4">
                <h3 className="text-sm font-bold font-display text-foreground mb-2">Synopsis</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{book.description}</p>
              </div>

              {/* Mood */}
              <div className="px-5 mt-4 flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-body">Mood:</span>
                <span className="px-3 py-1 rounded-[20px] bg-secondary text-xs font-body text-secondary-foreground">{book.mood}</span>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div className="px-5 mt-5 pb-8">
                  <h3 className="text-sm font-bold font-display text-foreground mb-3">You might also like</h3>
                  <div className="flex gap-3 overflow-x-auto hide-scrollbar">
                    {related.map((r) => (
                      <button key={r.id} onClick={() => { onClose(); setTimeout(() => document.dispatchEvent(new CustomEvent("openBook", { detail: r.id })), 100); }} className="flex-shrink-0 w-20 text-left active:scale-95 transition-transform">
                        <img src={getCover(r.id)} alt={r.title} className="w-20 h-28 rounded-lg object-cover shadow-card" loading="lazy" />
                        <p className="text-[11px] font-display text-foreground mt-1 line-clamp-2 leading-tight">{r.title}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookDetailModal;
