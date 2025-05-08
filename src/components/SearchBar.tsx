import { getBookByISBN } from "../api/googleBooks";
import { useBookContext } from "../context/BookContext";

function SearchBar(){
    const {state, dispatch } = useBookContext();

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        const book = await getBookByISBN(state.searchTerm);
        dispatch({type: 'SET_BOOK', payload: book })
    }

    return (
        <form onSubmit={handleSearch}>
            <input 
                value={state.searchTerm}
                onChange={(e) => {
                    dispatch({type: 'SET_SEARCH', payload: e.target.value})
                }}
                placeholder="Search For Books by ISBN"
            />
            <button> Search </button>
        </form>
    )
}

export { SearchBar }