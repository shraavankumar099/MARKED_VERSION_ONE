import { useState } from "react";
import { books } from "@/data/books";
import AppHeader from "@/components/AppHeader";
import GenreChips from "@/components/GenreChips";
import BookGrid from "@/components/BookGrid";
import BookDetailModal from "@/components/BookDetailModal";

const ExplorePage = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = books.filter((b) => {
    const matchesGenre = selectedGenre === "All" || b.genre === selectedGenre;
    const matchesMood = !selectedMood || b.mood === selectedMood;
    const matchesSearch = !searchQuery || b.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesMood && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      <AppHeader onSearchChange={setSearchQuery} />
      <div className="px-4 pt-4">
        <h1 className="text-xl font-bold font-display text-foreground">Explore</h1>
        <p className="text-xs text-muted-foreground font-body mt-0.5">Find your next obsession</p>
      </div>
      <GenreChips
        selectedGenre={selectedGenre}
        onGenreSelect={setSelectedGenre}
        showMoods
        selectedMood={selectedMood}
        onMoodSelect={(m) => setSelectedMood(m === selectedMood ? "" : m)}
      />
      <BookGrid books={filtered} title={selectedGenre === "All" ? "All Books" : selectedGenre} onBookSelect={setSelectedBook} />
      <BookDetailModal bookId={selectedBook} onClose={() => setSelectedBook(null)} />
    </div>
  );
};

export default ExplorePage;
