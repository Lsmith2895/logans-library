import { getBookByISBN } from '../api/googleBooks';
import { useBookContext } from '../context/BookContext';

function SearchBar() {
  const { state, dispatch } = useBookContext();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const book = await getBookByISBN(state.searchTerm);
    dispatch({ type: 'SET_BOOK', payload: book });
  };

  return (
    <form onSubmit={handleSearch} className="p-4">
      <input
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
      <button> Search </button>
    </form>
  );
}

export { SearchBar };
