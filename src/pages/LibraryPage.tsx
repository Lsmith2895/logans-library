import { Animate } from '../components/Animate';
import { BookCard } from '../components/BookCard';
import { useBookContext } from '../context/BookContext';
import type { GoogleBook } from '../types/book';
import { HowToGuide } from './HowToGuide';

function LibraryPage() {
  const { state } = useBookContext();
  const books: GoogleBook[] | undefined = state.rawBook?.items;

  if (state.rawBook === null) {
    return <HowToGuide />
  }


  return (
    <div className="p-4">
      <h1 className="p-3 text-4xl font-semibold">Pretty Book Data From Google Books API</h1>

      {books ? (
        <Animate>
          <div className={`grid grid-cols-1 gap-3 md:grid-cols-2`}>
            {books.map((book, index) => {
              return <BookCard key={book.id || index} book={book} />;
            })}
          </div>
        </Animate>
      ) : (
        <div className='text-3xl m-5 text-red-600'> No Books Found </div>
      )}
    </div>
  );
}

export { LibraryPage };
