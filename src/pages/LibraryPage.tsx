import { BookCard } from '../components/BookCard';
import { useBookContext } from '../context/BookContext';

function LibraryPage() {
  const { state } = useBookContext();
  const books = state.rawBook?.items;

  if (!books) {
    return <div> no books found</div>;
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
