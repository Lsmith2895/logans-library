import axios from 'axios';
import type { GoogleBookResponse } from '../types/book';
import { getGoogleBooksApiKey } from '../utils/getGoogleBooksApiKey';

async function getBookByISBN(isbn: string): Promise<GoogleBookResponse | null> {
  // See getGoogleBooksApiKey for why we didn't use import.meta here
  const apiKey = getGoogleBooksApiKey();

  const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

  try {
    const res = await axios.get(`${BASE_URL}?q=isbn:${isbn}&key=${apiKey}`);
    return res.data;
  } catch (e) {
    console.error('Error fetching book:', e);
    return null;
  }
}

export { getBookByISBN };
