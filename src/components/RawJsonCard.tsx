import { Editor } from '@monaco-editor/react';
import { useBookContext } from '../context/BookContext';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function RawJsonCard() {
  const { state } = useBookContext();
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (state.rawBook) {
      setAnimateIn(true);
    }
  }, [state.rawBook]);

  return (
    <>
      {state.rawBook && (
        <Link to="/raw">
          <div
            className={`my-4 h-96 max-w-full transform rounded-3xl border border-[#597002] bg-gray-950 p-6 transition-all duration-800 ease-out sm:mx-6 sm:h-[600px] ${animateIn ? 'scale-100 opacity-100' : 'scale-85 opacity-0'}`}
          >
            <h1 className="p-3 text-4xl font-semibold">RAW JSON</h1>
            <div className="h-5/6 pt-5">
              <Editor
                theme="vs-dark"
                language="json"
                value={JSON.stringify(state.rawBook, null, 2)}
                options={{
                  minimap: { enabled: false },
                  stickyScroll: { enabled: false },
                  fontSize: 12,
                  wordWrap: 'on',
                  scrollBeyondLastLine: false,
                  lineNumbers: 'off',
                }}
              />
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export { RawJsonCard };
