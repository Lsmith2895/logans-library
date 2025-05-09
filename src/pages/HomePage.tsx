import { RawJsonCard } from '../components/RawJsonCard';

function HomePage() {
  return (
    <div className="p-4 md:max-w-5/6">
      <div> fallibilism definition card place here</div>

      <RawJsonCard />

      <div className="card-gradient flex h-72 max-w-full rounded-3xl p-4 sm:mx-6">
        <div className="flex-col md:py-14 py-7">
          <div className="card-title md:text-5xl font-black text-4xl"> How-To Guide</div>
          <p> Learn how to search for books by ISBN with these simle steps.</p>
        </div>
        <img src="./public/book-icon.png" className="my-14 md:h-40 h-30" />
      </div>

      <div> pretty book preview</div>

      <div> recent book preview</div>
    </div>
  );
}

export { HomePage };
