import axios from "axios"
import type { GoogleBookResponse } from "../types/book";


async function getBookByISBN(isbn: string): Promise<GoogleBookResponse | null> {
    const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
    
    try {
        const res = await axios.get(`${BASE_URL}?q=isbn:${isbn}&key=${apiKey}`);
        return res.data;
      } catch (e) {
        console.error('Error fetching book:', e);
        return null;
      }
}

export { getBookByISBN }