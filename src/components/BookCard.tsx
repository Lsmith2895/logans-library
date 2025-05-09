import type { GoogleBook } from '../types/book';

type BookCardProps = {
  book: GoogleBook;
};

function BookCard({ book }: BookCardProps) {
  const {
    title = 'Unknown title',
    subtitle = '',
    authors = [],
    imageLinks,
  } = book?.volumeInfo ?? {};

  const imageUrl = imageLinks?.thumbnail ?? imageLinks?.smallThumbnail ?? '';
  const textSnippet = book.searchInfo?.textSnippet ?? '';
  const author = authors[0] ?? 'Unknown';

  return (
    <>
      <div className="m-4 rounded-3xl bg-gray-950 px-1 py-4">
        <div className="flex">
          <img className="object-contain p-3" src={imageUrl} alt={`Cover of ${title}`} />
          <div>
            <h1 className="text-2xl font-medium">{title}</h1>
            <div> {subtitle}</div>
            <div className="text-[#b4e300]">
              {' '}
              Author: <span className="text-white">{author}</span>
            </div>
          </div>
        </div>
        <div>
          <p className="overflow-hidden pt-6 font-extralight">{textSnippet}</p>
        </div>
      </div>
    </>
  );
}

export { BookCard };
