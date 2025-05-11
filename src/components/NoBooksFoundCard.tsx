/* eslint-disable react/no-unescaped-entities */
function NoBooksFound() {
  return (
    <div className="m-4 rounded-3xl bg-gray-900 px-6 py-10 text-white shadow-lg">
      <h2 className="text-2xl font-bold text-[#b4e300]">📚 Well Played, Book Sleuth!</h2>
      <p className="mt-4 text-lg">
        Looks like you've discovered a title even we don't have in our stacks.
      </p>
      <p className="mt-2">
        You’ve officially stumped us — and we love it. Our team’s been notified and is already on
        the hunt to track it down.
      </p>
      <p className="mt-4 text-gray-400 italic">
        (P.S. You should probably join a trivia team. You’ve got skills.)
      </p>
    </div>
  );
}
export { NoBooksFound };
