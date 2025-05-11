import { Animate } from '../components/Animate';
import { HowToCard } from '../components/HowToCard';
import { RawJsonCard } from '../components/RawJsonCard';

function HomePage() {
  return (
    <Animate>
      <div className="max-w-7xl p-4 md:mt-14 md:px-20">
        <div className="mb-10">
          <div className="gradient-text text-5xl font-black sm:text-9xl">
            Question
            <br />
            Everything
          </div>
          <div className="mt-3 text-3xl sm:text-4xl">
            Discover books worth changing your mind for.
          </div>
        </div>

        <RawJsonCard />

        <HowToCard />
      </div>
    </Animate>
  );
}

export { HomePage };
