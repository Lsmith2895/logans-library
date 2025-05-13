import { Animate } from '../components/Animate';
import { BookCard } from '../components/BookCard';
import { NoBooksFound } from '../components/NoBooksFoundCard';
import { useBookContext } from '../context/BookContext';
import type { GoogleBook } from '../types/book';
import { HowToGuide } from './HowToGuide';

function LibraryPage() {
  const { state } = useBookContext();
  const books: GoogleBook[] | undefined = state.rawBook?.items;

  if (state.rawBook === null) {
    return (
      <div className="p-4">
        <h1 className="p-3 text-4xl font-semibold">Styled Book Data</h1>
        <HowToGuide />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="p-3 text-4xl font-semibold">Styled Book Data</h1>

      {books ? (
        <Animate>
          <div className={`grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3`}>
            {books.map((book) => {
              return <BookCard key={book.id} book={book} />;
            })}
          </div>
        </Animate>
      ) : (
        <NoBooksFound />
      )}
    </div>
  );
}

export { LibraryPage };
