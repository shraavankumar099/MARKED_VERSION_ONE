import { genres, moods } from "@/data/books";

interface GenreChipsProps {
  selectedGenre: string;
  onGenreSelect: (genre: string) => void;
  showMoods?: boolean;
  selectedMood?: string;
  onMoodSelect?: (mood: string) => void;
}

const GenreChips = ({ selectedGenre, onGenreSelect, showMoods, selectedMood, onMoodSelect }: GenreChipsProps) => {
  return (
    <div className="px-4 mt-5 space-y-3">
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreSelect(genre)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-[20px] text-xs font-semibold font-body transition-all duration-200 active:scale-95 ${
              selectedGenre === genre
                ? "bg-foreground text-background shadow-card"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {showMoods && (
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => onMoodSelect?.(mood)}
              className={`flex-shrink-0 px-3 py-1 rounded-[20px] text-[11px] font-body transition-all duration-200 active:scale-95 ${
                selectedMood === mood
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {mood}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenreChips;
