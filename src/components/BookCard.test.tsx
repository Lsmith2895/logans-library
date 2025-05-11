import { render, screen } from "@testing-library/react"
import { singleBookResponse } from "../__mocks__/mockGoogleApiResponses"
import type { GoogleBook } from "../types/book"
import { BookCard } from "./BookCard"


describe('Book Card', () => {
    it('displays full book data', () => {
        render(<BookCard book={singleBookResponse.items![0] as GoogleBook} />)
        
        expect(screen.getByText(/Clint Emerson/)).toBeInTheDocument();
        expect(screen.getByText('The Right Kind of Crazy')).toBeInTheDocument();
        expect(screen.getByText(/unlike any military memoir/i)).toBeInTheDocument();
        expect(screen.getByText(/Author:/i)).toBeInTheDocument();

        const image = screen.getByAltText(/Cover of The Right Kind of Crazy/);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'http://books.google.com/books/content?id=a8q2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api');
    })
})