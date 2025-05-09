import { Editor } from '@monaco-editor/react';
import { useBookContext } from '../context/BookContext';
import { Link } from 'react-router-dom';

function RawJsonCard() {
  const { state } = useBookContext();

  return (
    <Link to="/raw">
      <div className="my-4 h-96 max-w-full rounded-3xl bg-gray-950 p-6 sm:mx-6 border border-[#597002]">
        <h1 className="p-3 text-4xl font-semibold">RAW JSON</h1>
        <div className="h-5/6 pt-5">
          <Editor
            theme="vs-dark"
            language="json"
            defaultValue={JSON.stringify(state.rawBook, null, 2)}
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
  );
}

export { RawJsonCard };
