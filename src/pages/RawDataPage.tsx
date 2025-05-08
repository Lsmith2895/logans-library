import { useBookContext } from '../context/BookContext';

function RawDataPage() {
  const { state } = useBookContext();
  return (
    <>
      {state.rawBook ? (
        <div className="pt-10 whitespace-pre-wrap">{JSON.stringify(state.rawBook, null, 2)}</div>
      ) : (
        <div>home page how to guide</div>
      )}
    </>
  );
}

export { RawDataPage };
