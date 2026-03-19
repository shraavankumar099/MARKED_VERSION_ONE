import { useState, useEffect } from "react";
import { books } from "@/data/books";
import AppHeader from "@/components/AppHeader";
import HeroCarousel from "@/components/HeroCarousel";
import ContinueReading from "@/components/ContinueReading";
import GenreChips from "@/components/GenreChips";
import BookGrid from "@/components/BookGrid";
import TrendingList from "@/components/TrendingList";
import BookDetailModal from "@/components/BookDetailModal";

const Index = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handler = (e: Event) => setSelectedBook((e as CustomEvent).detail);
    document.addEventListener("openBook", handler);
    return () => document.removeEventListener("openBook", handler);
  }, []);

  const filtered = books.filter((b) => {
    const matchesGenre = selectedGenre === "All" || b.genre === selectedGenre;
    const matchesSearch = !searchQuery || b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      <AppHeader onSearchChange={setSearchQuery} />

      {/* Greeting */}
      <div className="px-4 pt-4">
        <p className="text-xs text-muted-foreground font-body">Welcome back</p>
        <h1 className="text-xl font-bold font-display text-foreground">What will you read today?</h1>
      </div>

      <HeroCarousel onBookSelect={setSelectedBook} />
      <ContinueReading onBookSelect={setSelectedBook} />
      <GenreChips selectedGenre={selectedGenre} onGenreSelect={setSelectedGenre} />
      <BookGrid books={filtered.slice(0, 6)} title="Discover" onBookSelect={setSelectedBook} />

      <div className="mt-1" />
      <TrendingList onBookSelect={setSelectedBook} />

      <div className="mt-2" />
      <BookGrid books={books.filter((b) => b.mood === "Emotional" || b.mood === "Cozy")} title="For Your Mood" onBookSelect={setSelectedBook} />

      <BookDetailModal bookId={selectedBook} onClose={() => setSelectedBook(null)} />
    </div>
  );
};

export default Index;
