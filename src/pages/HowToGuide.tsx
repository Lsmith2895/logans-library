function HowToGuide() {
  return (
    <div className="mx-auto my-8 max-w-7xl rounded-3xl bg-amber-100 p-8 shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">How to Search Books by ISBN</h1>
      <h3 className="mt-2 text-lg text-gray-700">Find any book using the barcode on the back</h3>

      <div className="mt-6 flex flex-col-reverse gap-8 md:flex-row md:items-start">
        <div className="flex-1">
          <ol className="list-decimal space-y-2 pl-6 text-gray-800">
            <li>Get a physical book from your library</li>
            <li>Find the barcode on the back of the book</li>
            <li>Type the barcode into the search bar</li>
          </ol>

          <div className="mt-6 text-gray-700">
            <p className="mb-2">
              For testing purposes, any book will do — but try these to explore the app&apos;s
              features:
            </p>
            <div className="font-mono text-black">
              <p>
                <strong>Single Book:</strong> 9781501184161
              </p>
              <p>
                <strong>Multiple Books:</strong> 1111111111{' '}
                <span className="text-sm text-gray-600">(that’s 10 ones)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HowToGuide };
