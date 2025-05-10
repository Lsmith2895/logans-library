import { HowToGuide } from '../components/HowToGuide';
import { RawJsonCard } from '../components/RawJsonCard';

function HomePage() {
  return (
    <div className="max-w-7xl p-4 md:px-20">
      <div className='mb-10 p-6'>
        <div className='gradient-text text-5xl sm:text-7xl font-black p-4'> Question<br />Everything</div>
        <div className='text-3xl ml-3.5 sm:text-4xl'>Discover books worth changing your mind for.</div>
      </div>
      <RawJsonCard />
      <HowToGuide />

      <div> pretty book preview</div>

      <div> recent book preview</div>
    </div>
  );
}

export { HomePage };
