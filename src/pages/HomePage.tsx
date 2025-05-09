import { HowToGuide } from '../components/HowToGuide';
import { RawJsonCard } from '../components/RawJsonCard';

function HomePage() {
  return (
    <div className="p-4 md:max-w-5/6">
      <RawJsonCard />
      <HowToGuide />

      <div> pretty book preview</div>

      <div> recent book preview</div>
    </div>
  );
}

export { HomePage };
