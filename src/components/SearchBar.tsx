import { useNavigate } from 'react-router-dom';
import { getBookByISBN } from '../api/googleBooks';
import { useBookContext } from '../context/BookContext';

function SearchBar() {
  const { state, dispatch } = useBookContext();
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const book = await getBookByISBN(state.searchTerm);
    dispatch({ type: 'SET_BOOK', payload: book });

    navigate('/library');
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex max-w-7xl justify-end p-4 px-6 sm:justify-start md:px-20"
    >
      <input
        className="rounded-4xl border-2 border-zinc-700 p-2 pl-4 outline-[#b4e300]"
        type="text"
        inputMode="numeric"
        pattern="\d{1,13}"
        maxLength={13}
        minLength={10}
        required
        value={state.searchTerm}
        placeholder="Search For Books by ISBN"
        onChange={e => {
          dispatch({ type: 'SET_SEARCH', payload: e.target.value });
        }}
        onInvalid={e =>
          (e.target as HTMLInputElement).setCustomValidity('Please enter a 10 or 13 digit ISBN')
        }
        onInput={e => {
          (e.target as HTMLInputElement).setCustomValidity('');
        }}
      />
      {/* Desktop search button */}
      <button className="ml-6 hidden cursor-pointer rounded-3xl border-2 border-[#b4e300] p-2 px-4 md:inline">
        Find Books By ISBN
      </button>

      {/* mobile search button */}
      <button className="ml-6 inline cursor-pointer rounded-3xl border-2 border-[#b4e300] p-2.5 px-4 md:hidden">
        <img src="/search.svg" className="h-5" />
      </button>
    </form>
  );
}

export { SearchBar };
