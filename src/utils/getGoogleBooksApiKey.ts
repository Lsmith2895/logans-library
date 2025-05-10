//  Due to using jest to test this functionality
//   We need to create a mockable function
//   because the import.meta is not supported by jest

export function getGoogleBooksApiKey(): string {
  return import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
}
