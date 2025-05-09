import { BookCard } from '../components/BookCard';
import { useBookContext } from '../context/BookContext';

function LibraryPage() {
  const { state } = useBookContext();
  const books = state.rawBook?.items;

  if (!books) {
    return <div> no books found</div>;
  }

  const cols = books.length > 3 ? 'grid-cols-3' : `grid-cols-${books.length}`

  return (
      <div className={`grid grid-cols-1 gap-3 lg:${cols}`}>
        {books.map((book, index) => {
          return <BookCard key={book.id || index} book={book} />;
        })}
      </div>
  );
}

export { LibraryPage };
