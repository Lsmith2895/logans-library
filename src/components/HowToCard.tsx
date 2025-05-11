import { Link } from 'react-router-dom';

function HowToCard() {
  return (
    <div className="card-gradient mt-9 flex h-[300px] max-w-full rounded-3xl p-4">
      <div className="py-7 md:py-14">
        <div className="card-title text-4xl font-black md:text-5xl"> How-To Guide</div>
        <p>
          Learn how to search for books by ISBN <br /> with these simle steps.
        </p>
        <Link to={'/guide'}>
          <button className="mt-4 rounded-3xl border-2 border-[#b4e300] bg-[#b4e300] px-6 py-2 font-extrabold text-black">
            Learn
          </button>
        </Link>
      </div>
      <img src="./public/book-icon.png" className="my-14 h-30 md:h-40" />
    </div>
  );
}

export { HowToCard };
