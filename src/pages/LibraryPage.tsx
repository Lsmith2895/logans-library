import { BookCard } from '../components/BookCard';
import { useBookContext } from '../context/BookContext';
import type { GoogleBook } from '../types/book';
import { HowToGuide } from './HowToGuide';

function LibraryPage() {
  const { state } = useBookContext();
  const books: GoogleBook[] | undefined = state.rawBook?.items;

  if (!books) {
    return <HowToGuide />;
  }

  return (
    <div className={`grid grid-cols-1 gap-3 md:grid-cols-2`}>
      {books.map((book, index) => {
        return <BookCard key={book.id || index} book={book} />;
      })}
    </div>
  );
}

export { LibraryPage };
