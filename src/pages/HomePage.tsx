import { HowToGuide } from '../components/HowToGuide';
import { RawJsonCard } from '../components/RawJsonCard';

function HomePage() {
  return (
    <div className="p-4 max-w-5xl">
      <RawJsonCard />
      <HowToGuide />

      <div> pretty book preview</div>

      <div> recent book preview</div>
    </div>
  );
}

export { HomePage };
