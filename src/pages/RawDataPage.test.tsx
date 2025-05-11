import { render, screen } from '@testing-library/react';
import { BookContext } from '../context/BookContext';
import { RawDataPage } from './RawDataPage';
import type { GoogleBookResponse } from '../types/book';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../utils/getGoogleBooksApiKey', () => ({
  getGoogleBooksApiKey: () => 'test-key',
}));

describe('Raw Data Page', () => {
  it('shows the how to guide when no rawBook state', () => {
    render(
      <MemoryRouter>
        <BookContext.Provider
          value={{ state: { rawBook: null, searchTerm: '' }, dispatch: () => {} }}
        >
          <RawDataPage />
        </BookContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/How to Search Books by ISBN/i)).toBeInTheDocument();
  });

  it('shows JSON when a rawBook is present', () => {
    const mockBook: GoogleBookResponse = {
      kind: 'books#volumes',
      totalItems: 1,
      items: [
        {
          kind: 'books#volume',
          id: 'a8q2DwAAQBAJ',
          etag: 'O2SBQmfqt30',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/a8q2DwAAQBAJ',
          volumeInfo: {
            title: 'The Right Kind of Crazy',
            subtitle: 'My Life as a Navy SEAL, Covert Operative, and Boy Scout from Hell',
            authors: ['Clint Emerson'],
            publisher: 'Atria Books',
            publishedDate: '2019-11-12',
            description:
              'Clint Emerson, retired Navy SEAL and author of the bestselling 100 Deadly Skills, presents an explosive, darkly funny, and often twisted account of being part of an elite team of operatives whose mission was to keep America safe by whatever means necessary. Clint Emerson is the only SEAL ever inducted into the International Spy Museum. Operating from the shadows, with an instinct for running towards trouble, his unique skill set made him the perfect hybrid operator. Emerson spent his career on the bleeding edge of intelligence and operations, often specializing in missions that took advantage of subterfuge, improvisation, the best in recon and surveillance tech to combat the changing global battlefield. MacGyvering everyday objects into working spyware was routine, and fellow SEALs referred to his activities simply as “special shit.” His parameters were: find, fix, and finish—and of course, leave no trace. The Right Kind of Crazy is unlike any military memoir you’ve ever read because Emerson is upfront about the fact that what makes you a great soldier and sometimes hero doesn’t always make you the best guy—but it does make for damn good stories.',
            industryIdentifiers: [
              {
                type: 'ISBN_13',
                identifier: '9781501184161',
              },
              {
                type: 'ISBN_10',
                identifier: '1501184164',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 320,
            printType: 'BOOK',
            categories: ['Biography & Autobiography'],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: '0.3.2.0.preview.0',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                'http://books.google.com/books/content?id=a8q2DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              thumbnail:
                'http://books.google.com/books/content?id=a8q2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            },
            language: 'en',
            previewLink:
              'http://books.google.com/books?id=a8q2DwAAQBAJ&printsec=frontcover&dq=isbn:9781501184161&hl=&cd=1&source=gbs_api',
            infoLink:
              'http://books.google.com/books?id=a8q2DwAAQBAJ&dq=isbn:9781501184161&hl=&source=gbs_api',
            canonicalVolumeLink:
              'https://books.google.com/books/about/The_Right_Kind_of_Crazy.html?hl=&id=a8q2DwAAQBAJ',
          },
          saleInfo: {
            country: 'US',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'US',
            viewability: 'PARTIAL',
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink: 'http://play.google.com/books/reader?id=a8q2DwAAQBAJ&hl=&source=gbs_api',
            accessViewStatus: 'SAMPLE',
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              'The Right Kind of Crazy is unlike any military memoir you’ve ever read because Emerson is upfront about the fact that what makes you a great soldier and sometimes hero doesn’t always make you the best guy—but it does make for damn ...',
          },
        },
      ],
    };

    render(
      <BookContext.Provider
        value={{ state: { rawBook: mockBook, searchTerm: '' }, dispatch: () => {} }}
      >
        <RawDataPage />
      </BookContext.Provider>
    );

    expect(screen.getByText(/The Right Kind of Crazy/)).toBeInTheDocument();
  });
});
