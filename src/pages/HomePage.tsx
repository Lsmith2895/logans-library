import { HowToGuide } from '../components/HowToGuide';
import { RawJsonCard } from '../components/RawJsonCard';

function HomePage() {
  return (
    <div className="max-w-7xl p-4 md:px-20">
      <div className="mb-10 p-6">
        <div className="gradient-text p-4 text-5xl font-black sm:text-7xl">
          {' '}
          Question
          <br />
          Everything
        </div>
        <div className="ml-3.5 text-3xl sm:text-4xl">
          Discover books worth changing your mind for.
        </div>
      </div>
      <RawJsonCard />
      <HowToGuide />

      <div> pretty book preview</div>

      <div> recent book preview</div>
    </div>
  );
}

export { HomePage };
