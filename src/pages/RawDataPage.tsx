import { Animate } from '../components/Animate';
import { useBookContext } from '../context/BookContext';
import { HowToGuide } from './HowToGuide';

function RawDataPage() {
  const { state } = useBookContext();

  return (
    <div className="p-4">
      <h1 className="p-3 text-4xl font-semibold"> Raw Book Data From Google Books </h1>

      {!state.rawBook ? (
        <HowToGuide />
      ) : (
        <Animate>
          <div className="pt-10 whitespace-pre-wrap">{JSON.stringify(state.rawBook, null, 2)}</div>
        </Animate>
      )}
    </div>
  );
}

export { RawDataPage };
