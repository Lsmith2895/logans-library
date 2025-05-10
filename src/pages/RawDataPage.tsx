import { useBookContext } from '../context/BookContext';
import { HowToGuide } from './HowToGuide';

function RawDataPage() {
  const { state } = useBookContext();
  return (
    <div className="p-4">
      {state.rawBook ? (
        <div className="pt-10 whitespace-pre-wrap">{JSON.stringify(state.rawBook, null, 2)}</div>
      ) : (
        <HowToGuide />
      )}
    </div>
  );
}

export { RawDataPage };
