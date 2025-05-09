function HowToGuide() {
  return (
    <div className="card-gradient flex h-72 max-w-full rounded-3xl p-4 sm:mx-6">
      <div className="flex-col py-7 md:py-14">
        <div className="card-title text-4xl font-black md:text-5xl"> How-To Guide</div>
        <p> Learn how to search for books by ISBN with these simle steps.</p>
      </div>
      <img src="./public/book-icon.png" className="my-14 h-30 md:h-40" />
    </div>
  );
}

export { HowToGuide };
