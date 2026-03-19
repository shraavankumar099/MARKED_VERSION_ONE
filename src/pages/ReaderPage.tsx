import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Settings, Moon, Sun, Type, Minus, Plus } from "lucide-react";
import { books, sampleChapterContent } from "@/data/books";

const ReaderPage = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === bookId);

  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(17);
  const [showControls, setShowControls] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  if (!book) {
    navigate("/");
    return null;
  }

  const paragraphs = sampleChapterContent.split("\n\n");

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[hsl(250,20%,8%)] text-[hsl(250,10%,85%)]" : "bg-[hsl(40,30%,96%)] text-[hsl(250,25%,15%)]"
      }`}
    >
      {/* Top bar */}
      <AnimatePresence>
        {showControls && (
          <motion.header
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            exit={{ y: -60 }}
            className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between ${
              darkMode ? "bg-[hsl(250,20%,8%)]/90" : "bg-[hsl(40,30%,96%)]/90"
            } backdrop-blur-xl`}
          >
            <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-secondary/30 flex items-center justify-center active:scale-95 transition-transform">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="text-center flex-1 mx-4">
              <p className="text-xs font-semibold font-display truncate">{book.title}</p>
              <p className="text-[10px] opacity-60 font-body">Chapter 1</p>
            </div>
            <button onClick={() => setShowSettings(!showSettings)} className="w-9 h-9 rounded-full bg-secondary/30 flex items-center justify-center active:scale-95 transition-transform">
              <Settings className="w-4 h-4" />
            </button>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Settings panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-14 right-4 z-50 shadow-modal p-4 w-56 ${
              darkMode ? "bg-[hsl(250,18%,14%)]" : "bg-card"
            }`}
            style={{ borderRadius: '14px' }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-body font-medium">Theme</span>
              <button onClick={() => setDarkMode(!darkMode)} className="w-8 h-8 rounded-full bg-secondary/40 flex items-center justify-center active:scale-95 transition-transform">
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-body font-medium flex items-center gap-1"><Type className="w-3 h-3" /> Size</span>
              <div className="flex items-center gap-2">
                <button onClick={() => setFontSize(Math.max(13, fontSize - 1))} className="w-7 h-7 rounded-full bg-secondary/40 flex items-center justify-center active:scale-95 transition-transform">
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-xs font-body w-5 text-center">{fontSize}</span>
                <button onClick={() => setFontSize(Math.min(24, fontSize + 1))} className="w-7 h-7 rounded-full bg-secondary/40 flex items-center justify-center active:scale-95 transition-transform">
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div
        className="max-w-mobile mx-auto px-6 pt-20 pb-20 cursor-pointer"
        onClick={() => { setShowControls(!showControls); setShowSettings(false); }}
      >
        <h2 className="text-2xl font-bold font-display mb-6">Chapter 1</h2>
        <div className="space-y-5" style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}>
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.03 }}
              className="font-body"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Bottom progress */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            exit={{ y: 40 }}
            className={`fixed bottom-0 left-0 right-0 z-50 px-5 py-3 ${
              darkMode ? "bg-[hsl(250,20%,8%)]/90" : "bg-[hsl(40,30%,96%)]/90"
            } backdrop-blur-xl`}
          >
            <div className="max-w-mobile mx-auto">
              <div className="h-1 bg-secondary/30 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-primary rounded-full" style={{ width: "12%" }} />
              </div>
              <div className="flex justify-between text-[10px] opacity-50 font-body">
                <span>Chapter 1 of {book.chapters}</span>
                <span>12% complete</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReaderPage;
