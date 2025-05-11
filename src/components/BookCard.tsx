import type { GoogleBook } from '../types/book';

type BookCardProps = {
  book: GoogleBook;
};

function BookCard({ book }: BookCardProps) {
  const { title, subtitle, authors, imageLinks } = book.volumeInfo;

  // prioritize thumbnail for book image because it is the highest quality
  const imageUrl = imageLinks?.thumbnail ?? imageLinks?.smallThumbnail ?? './public/no-image.svg';
  const textSnippet = book.searchInfo?.textSnippet ?? '';
  const author = authors[0];

  return (
    <div className="m-4 rounded-3xl bg-gray-900 px-1 py-4">
      <div className="flex">
        <img className="object-contain p-3" src={imageUrl} alt={`Cover of ${title}`} />
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-medium">{title}</h1>
          <h2 className="text-[#b4e300]">
            Author: <span className="text-white">{author}</span>
          </h2>
          <div> {subtitle}</div>
        </div>
      </div>
      <div className="overflow-hidden px-3 pt-6 font-extralight">{textSnippet}</div>
    </div>
  );
}

export { BookCard };
