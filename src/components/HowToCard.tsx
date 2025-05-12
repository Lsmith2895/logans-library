import { Link } from 'react-router-dom';

function HowToCard() {
  return (
    <div className="card-gradient my-9 flex max-w-full rounded-3xl p-4 md:my-28">
      <div className="w-2/3 py-2 md:px-6 md:py-14">
        <div className="card-title text-4xl font-black md:text-7xl"> How-To Guide</div>
        <p className="pt-2 md:pt-8 md:text-3xl">
          Learn how to search for books by ISBN with these simple steps.
        </p>
        <Link to={'/guide'}>
          <button className="mt-6 cursor-pointer rounded-3xl border-2 border-[#b4e300] bg-[#b4e300] px-6 py-2 font-extrabold text-black">
            Start Searching
          </button>
        </Link>
      </div>
      <div className="w-1/3">
        <img src="/book-icon.png" className="my-12 h-30 md:h-50" />
      </div>
    </div>
  );
}

export { HowToCard };
