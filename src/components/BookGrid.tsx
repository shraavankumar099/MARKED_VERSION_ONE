import { Book } from "@/data/books";
import BookCard from "./BookCard";

interface BookGridProps {
  books: Book[];
  title: string;
  onBookSelect: (bookId: string) => void;
}

const BookGrid = ({ books, title, onBookSelect }: BookGridProps) => {
  return (
    <section className="px-4 mt-7">
      <h2 className="text-lg font-bold font-display text-foreground mb-3">{title}</h2>
      <div className="grid grid-cols-3 gap-3">
        {books.map((book, i) => (
          <BookCard
            key={book.id}
            book={book}
            index={i}
            onClick={() => onBookSelect(book.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default BookGrid;
