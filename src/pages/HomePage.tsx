import { HowToGuide } from '../components/HowToGuide';
import { RawJsonCard } from '../components/RawJsonCard';

function HomePage() {
  return (
    <div className="max-w-5xl p-4">
      <RawJsonCard />
      <HowToGuide />

      <div> pretty book preview</div>

      <div> recent book preview</div>
    </div>
  );
}

export { HomePage };
