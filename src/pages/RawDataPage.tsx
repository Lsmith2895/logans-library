import { useBookContext } from '../context/BookContext';
import { HowToGuide } from './HowToGuide';

function RawDataPage() {
  const { state } = useBookContext();

  if (!state.rawBook) {
    return <HowToGuide />;
  }

  return (
    <div className="p-4">
      <div className="pt-10 whitespace-pre-wrap">{JSON.stringify(state.rawBook, null, 2)}</div>
    </div>
  );
}

export { RawDataPage };
