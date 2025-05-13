import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from 'react';
import type { GoogleBookResponse } from '../types/book';

type State = {
  rawBook: GoogleBookResponse | null;
  searchTerm: string; // this will be the ISBN that the user passes in 10 or 13 digit number as a string
};

type Action =
  | { type: 'SET_BOOK'; payload: GoogleBookResponse | null }
  | { type: 'SET_SEARCH'; payload: string };

const BookContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
} | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_BOOK':
      return { ...state, rawBook: action.payload };
    case 'SET_SEARCH':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}

function BookProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { rawBook: null, searchTerm: '' });

  // This functionality automatically searches for a book
  // useful for dev environment
  // where you don't want to search a book every time the page is reloaded

  // useEffect(() => {
  //   const defaultISBN = '9781501184161';
  //   getBookByISBN(defaultISBN).then(book => {
  //     if (book) {
  //       dispatch({ type: 'SET_BOOK', payload: book });
  //       dispatch({ type: 'SET_SEARCH', payload: defaultISBN });
  //     }
  //   });
  // }, []);

  return <BookContext.Provider value={{ state, dispatch }}>{children}</BookContext.Provider>;
}

function useBookContext() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBookContext must be used in Book Provider');
  }
  return context;
}

export { BookProvider, useBookContext, BookContext };
