function HowToGuide() {
  return (
    <div className="m-10 max-w-7xl rounded-3xl bg-amber-100 p-4 shadow-lg md:m-20">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">How to Search Books by ISBN</h1>
      <h3 className="mt-2 text-lg text-gray-700">Find any book using the barcode on the back</h3>

      <div className="mt-6 flex flex-col-reverse gap-8 md:flex-row md:items-start">
        <div className="flex-1">
          <ol className="list-decimal space-y-2 pl-6 text-gray-800">
            <li>Get a physical book from your library</li>
            <li>Find the barcode on the back of the book</li>
            <li>Type the barcode into the search bar</li>
            <li>Navigate to the raw or pretty book via the menu</li>
          </ol>

          <div className="mt-6 text-gray-700">
            <p className="mb-2 text-2xl font-bold">
              Don&apos;t have any books handy – try these to explore the app&apos;s features:
            </p>
            <div className="font-mono text-black">
              <div className="mt-6 rounded-xl bg-gray-100 p-4 shadow-sm">
                <p>
                  <strong>Single Book:</strong> 9781501184161
                </p>
              </div>

              <div className="mt-6 rounded-xl bg-gray-100 p-4 shadow-sm">
                <p>
                  <strong>Multiple Books:</strong> 1111111111{' '}
                  <span className="text-sm text-gray-600">(that’s 10 ones)</span>
                </p>
              </div>
              <div className="mt-6 rounded-xl bg-gray-100 p-4 shadow-sm">
                <p className="text-base text-gray-800">
                  <strong>No Books:</strong> <span className="font-mono">11112111111</span>
                </p>

                <p className="mt-2 text-sm text-gray-700">
                  This ISBN is a test case with a slightly more complex expected behavior:
                </p>

                <ol className="mt-2 list-inside list-disc text-sm text-gray-700">
                  <li>Show raw JSON preview on the home page</li>
                  <li>
                    Show full raw JSON on the <strong>Raw JSON</strong> page
                  </li>
                  <li>
                    Show a “No Books Found” message on the <strong>Pretty Book</strong> page
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HowToGuide };
