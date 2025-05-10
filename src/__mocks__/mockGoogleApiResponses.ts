import type { GoogleBookResponse } from "../types/book"

const singleBookResponse : GoogleBookResponse= {
  "kind": "books#volumes",
  "totalItems": 1,
  "items": [
    {
      "kind": "books#volume",
      "id": "a8q2DwAAQBAJ",
      "etag": "uVKX02O3PbU",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/a8q2DwAAQBAJ",
      "volumeInfo": {
        "title": "The Right Kind of Crazy",
        "subtitle": "My Life as a Navy SEAL, Covert Operative, and Boy Scout from Hell",
        "authors": [
          "Clint Emerson"
        ],
        "publisher": "Atria Books",
        "publishedDate": "2019-11-12",
        "description": "Clint Emerson, retired Navy SEAL and author of the bestselling 100 Deadly Skills, presents an explosive, darkly funny, and often twisted account of being part of an elite team of operatives whose mission was to keep America safe by whatever means necessary. Clint Emerson is the only SEAL ever inducted into the International Spy Museum. Operating from the shadows, with an instinct for running towards trouble, his unique skill set made him the perfect hybrid operator. Emerson spent his career on the bleeding edge of intelligence and operations, often specializing in missions that took advantage of subterfuge, improvisation, the best in recon and surveillance tech to combat the changing global battlefield. MacGyvering everyday objects into working spyware was routine, and fellow SEALs referred to his activities simply as “special shit.” His parameters were: find, fix, and finish—and of course, leave no trace. The Right Kind of Crazy is unlike any military memoir you’ve ever read because Emerson is upfront about the fact that what makes you a great soldier and sometimes hero doesn’t always make you the best guy—but it does make for damn good stories.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781501184161"
          },
          {
            "type": "ISBN_10",
            "identifier": "1501184164"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 320,
        "printType": "BOOK",
        "categories": [
          "Biography & Autobiography"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.3.2.0.preview.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=a8q2DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=a8q2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=a8q2DwAAQBAJ&printsec=frontcover&dq=isbn:9781501184161&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=a8q2DwAAQBAJ&dq=isbn:9781501184161&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Right_Kind_of_Crazy.html?hl=&id=a8q2DwAAQBAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=a8q2DwAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The Right Kind of Crazy is unlike any military memoir you’ve ever read because Emerson is upfront about the fact that what makes you a great soldier and sometimes hero doesn’t always make you the best guy—but it does make for damn ..."
      }
    }
  ]
}

// this response has tons of data we do not yet need in the app so it is omitted from the google response type
const multipleBooksResponse : Partial<GoogleBookResponse> = {
  "kind": "books#volumes",
  "totalItems": 1000000,
  "items": [
    {
      "kind": "books#volume",
      "id": "FOQ3AAAAMAAJ",
      "etag": "YWFH+Yf/D9o",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/FOQ3AAAAMAAJ",
      "volumeInfo": {
        "title": "A Nature Wooing at Ormond by the Sea",
        "authors": [
          "Willis Stanley Blatchley"
        ],
        "publishedDate": "1902",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "UOM:39015065200480"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 286,
        "printType": "BOOK",
        "categories": [
          "Natural history"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.10.10.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=FOQ3AAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=FOQ3AAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=FOQ3AAAAMAAJ&printsec=frontcover&dq=isbn:1111111111&hl=&cd=1&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=FOQ3AAAAMAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=FOQ3AAAAMAAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=FOQ3AAAAMAAJ&rdid=book-FOQ3AAAAMAAJ&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "US",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com/books/download/A_Nature_Wooing_at_Ormond_by_the_Sea.epub?id=FOQ3AAAAMAAJ&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "downloadLink": "http://books.google.com/books/download/A_Nature_Wooing_at_Ormond_by_the_Sea.pdf?id=FOQ3AAAAMAAJ&hl=&output=pdf&sig=ACfU3U1Ci3SZRpgE-oN3X3ccIgqHqBovvg&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=FOQ3AAAAMAAJ&hl=&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      }
    },
    {
      "kind": "books#volume",
      "id": "sG1bAAAAMAAJ",
      "etag": "13WMRLqFvro",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/sG1bAAAAMAAJ",
      "volumeInfo": {
        "title": "Affrilachia",
        "subtitle": "Poems",
        "authors": [
          "Frank X. Walker"
        ],
        "publisher": "Ohio University Press Distributed Titles",
        "publishedDate": "2000",
        "description": "Collects poems about the African American experience in such rural areas as the Appalachian region.",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "UOM:39015058710818"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 116,
        "printType": "BOOK",
        "categories": [
          "Poetry"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.4.1.0.preview.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=sG1bAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=sG1bAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=sG1bAAAAMAAJ&dq=isbn:1111111111&hl=&cd=2&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=sG1bAAAAMAAJ&dq=isbn:1111111111&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Affrilachia.html?hl=&id=sG1bAAAAMAAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=sG1bAAAAMAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Collects poems about the African American experience in such rural areas as the Appalachian region."
      }
    },
    {
      "kind": "books#volume",
      "id": "XQUIAQAAIAAJ",
      "etag": "4tABbSPZQto",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/XQUIAQAAIAAJ",
      "volumeInfo": {
        "title": "The Best of Crunch and Des",
        "authors": [
          "Philip Wylie"
        ],
        "publishedDate": "1954",
        "description": "Selections from four of the author's books about Florida fishing.",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "UCAL:B3294862"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 424,
        "printType": "BOOK",
        "categories": [
          "Fishing stories, American"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.4.1.0.preview.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=XQUIAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=XQUIAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=XQUIAQAAIAAJ&dq=isbn:1111111111&hl=&cd=3&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=XQUIAQAAIAAJ&dq=isbn:1111111111&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Best_of_Crunch_and_Des.html?hl=&id=XQUIAQAAIAAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=XQUIAQAAIAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Selections from four of the author&#39;s books about Florida fishing."
      }
    },
    {
      "kind": "books#volume",
      "id": "oasWPQAACAAJ",
      "etag": "v9WTckB2i18",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/oasWPQAACAAJ",
      "volumeInfo": {
        "title": "Microéconomie",
        "subtitle": "Comportement des agents et concurrence parfaite",
        "authors": [
          "Franck Bien",
          "Sophie Méritet"
        ],
        "publisher": "Pearson",
        "publishedDate": "2024-06-28",
        "description": "Ce manuel présente l'essentiel de ce que doit savoir un étudiant de licence, de bachelor ou de prépas sur les théories du consommateur et du producteur en concurrence pure et parfaite. Il explique notamment les courbes d’indifférences, le taux marginal de substitution (TMS), le travail, l’épargne, les demandes de biens, la fonction de production, les coûts, la maximisation du profit, la fonction d’offre, l’équilibre de la firme... Conçu pour faciliter aussi bien l’apprentissage que la révision, cet ouvrage de microéconomie s’appuie sur: • 14 chapitres synthétiques; • le raisonnement marginaliste au coeur de l’apprentissage de la microéconomie; • une centaine d’exercices avec des corrigés détaillés car la microéconomie ne se comprend qu’en la pratiquant; • une plateforme numérique (eText) avec des éléments supplémentaires d’approfondissement et d’entraînement. Le livre donne accès à des ressources numériques exclusives sur votre eText: • la version en ligne de tous les chapitres de l’ouvrage; • deux chapitres supplémentaires d’introduction sur les notions d’équilibres et d’optimalités; • des annexes mathématiques à la présentation simple sur les méthodes de résolution, le Lagrangien, les dérivées; • une partie des corrigés des exercices du livre; • des exercices corrigés supplémentaires; • de nombreux compléments d’approfondissement avec applications corrigées.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1111111111"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781111111113"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=oasWPQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=oasWPQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "fr",
        "previewLink": "http://books.google.com/books?id=oasWPQAACAAJ&dq=isbn:1111111111&hl=&cd=4&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=oasWPQAACAAJ&dq=isbn:1111111111&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Micro%C3%A9conomie.html?hl=&id=oasWPQAACAAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=oasWPQAACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Conçu pour faciliter aussi bien l’apprentissage que la révision, cet ouvrage de microéconomie s’appuie sur: • 14 chapitres synthétiques; • le raisonnement marginaliste au coeur de l’apprentissage de la microéconomie; • une ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "WiI9gNv-DqYC",
      "etag": "vxlPHI8ZQrE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/WiI9gNv-DqYC",
      "volumeInfo": {
        "title": "BookData Dummy Title for Series Checkin",
        "authors": [
          "L. G. Minasean"
        ],
        "publisher": "Bert van der Moer",
        "publishedDate": "2001-10-18",
        "description": "A book that looks at over 35 artisan ateliers in the Tokyo downtown or \"shitamachi\" district in East Tokyo; the traditional commoner and merchant district of the Edo era. The book will feature artisans working out of small studios across downtown, creating exquisite items by hand. This is a rare glimpse into these studios, from screen makers, kimono dyers, washi paper makers to glass blowers. While many travelers will visit the Asakusa area to marvel at Sensoji, Tokyo's oldest temple, most visitors are unaware of the rich culture that is present beyond the tourist areas; in the back alleys, residential districts, and artisan studios. The region has retained many of the traditions of the Edo era, and the book will also look at aspects of urbanism such as bathhouses, shotengai shopping streets and nagaya architecture to look at the interconnectivity of all aspects of \"old Tokyo\" life. This book will delve into the craftsmen of the \"traditional end\" of Tokyo, in an accessible, lavish tome. With hundreds of photos, the book is a coffee-table book style visual tour into downtown artisan life, with a focus on places that a casual tourist can also visit as well. Interviews with the craftsmen also provides insight into the philosophy of the Japanese artisan.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781111111113"
          },
          {
            "type": "ISBN_10",
            "identifier": "1111111111"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 105,
        "printType": "BOOK",
        "categories": [
          "Crafts & Hobbies"
        ],
        "averageRating": 5,
        "ratingsCount": 2,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.4.2.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=WiI9gNv-DqYC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=WiI9gNv-DqYC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=WiI9gNv-DqYC&dq=isbn:1111111111&hl=&cd=5&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=WiI9gNv-DqYC&dq=isbn:1111111111&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/BookData_Dummy_Title_for_Series_Checkin.html?hl=&id=WiI9gNv-DqYC"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=WiI9gNv-DqYC&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The book will feature artisans working out of small studios across downtown, creating exquisite items by hand. This is a rare glimpse into these studios, from screen makers, kimono dyers, washi paper makers to glass blowers."
      }
    },
    {
      "kind": "books#volume",
      "id": "E9arGwAACAAJ",
      "etag": "QEeqHXqWtUo",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/E9arGwAACAAJ",
      "volumeInfo": {
        "title": "Microéconomie",
        "subtitle": "Comportement des agents et concurrence parfaite",
        "authors": [
          "Franck Bien",
          "Sophie Méritet"
        ],
        "publisher": "Pearson",
        "publishedDate": "2024-06-28",
        "description": "Ce manuel présente l'essentiel de ce que doit savoir un étudiant de licence, de bachelor ou de prépas sur les théories du consommateur et du producteur en concurrence pure et parfaite. Il explique notamment les courbes d’indifférences, le taux marginal de substitution (TMS), le travail, l’épargne, les demandes de biens, la fonction de production, les coûts, la maximisation du profit, la fonction d’offre, l’équilibre de la firme... Conçu pour faciliter aussi bien l’apprentissage que la révision, cet ouvrage de microéconomie s’appuie sur: • 14 chapitres synthétiques; • le raisonnement marginaliste au coeur de l’apprentissage de la microéconomie; • une centaine d’exercices avec des corrigés détaillés car la microéconomie ne se comprend qu’en la pratiquant; • une plateforme numérique (eText) avec des éléments supplémentaires d’approfondissement et d’entraînement. Le livre donne accès à des ressources numériques exclusives sur votre eText: • la version en ligne de tous les chapitres de l’ouvrage; • deux chapitres supplémentaires d’introduction sur les notions d’équilibres et d’optimalités; • des annexes mathématiques à la présentation simple sur les méthodes de résolution, le Lagrangien, les dérivées; • une partie des corrigés des exercices du livre; • des exercices corrigés supplémentaires; • de nombreux compléments d’approfondissement avec applications corrigées.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1111111111"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781111111113"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=E9arGwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=E9arGwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "fr",
        "previewLink": "http://books.google.com/books?id=E9arGwAACAAJ&dq=isbn:1111111111&hl=&cd=6&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=E9arGwAACAAJ&dq=isbn:1111111111&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Micro%C3%A9conomie.html?hl=&id=E9arGwAACAAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=E9arGwAACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Conçu pour faciliter aussi bien l’apprentissage que la révision, cet ouvrage de microéconomie s’appuie sur: • 14 chapitres synthétiques; • le raisonnement marginaliste au coeur de l’apprentissage de la microéconomie; • une ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "GFcmzgEACAAJ",
      "etag": "iK1Da8of3qc",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/GFcmzgEACAAJ",
      "volumeInfo": {
        "title": "Microéconomie",
        "subtitle": "Comportement des agents et concurrence parfaite",
        "authors": [
          "Franck Bien",
          "Sophie Méritet"
        ],
        "publisher": "Pearson",
        "publishedDate": "2024-06-28",
        "description": "Ce manuel présente l'essentiel de ce que doit savoir un étudiant de licence, de bachelor ou de prépas sur les théories du consommateur et du producteur en concurrence pure et parfaite. Il explique notamment les courbes d’indifférences, le taux marginal de substitution (TMS), le travail, l’épargne, les demandes de biens, la fonction de production, les coûts, la maximisation du profit, la fonction d’offre, l’équilibre de la firme... Conçu pour faciliter aussi bien l’apprentissage que la révision, cet ouvrage de microéconomie s’appuie sur: • 14 chapitres synthétiques; • le raisonnement marginaliste au coeur de l’apprentissage de la microéconomie; • une centaine d’exercices avec des corrigés détaillés car la microéconomie ne se comprend qu’en la pratiquant; • une plateforme numérique (eText) avec des éléments supplémentaires d’approfondissement et d’entraînement. Le livre donne accès à des ressources numériques exclusives sur votre eText: • la version en ligne de tous les chapitres de l’ouvrage; • deux chapitres supplémentaires d’introduction sur les notions d’équilibres et d’optimalités; • des annexes mathématiques à la présentation simple sur les méthodes de résolution, le Lagrangien, les dérivées; • une partie des corrigés des exercices du livre; • des exercices corrigés supplémentaires; • de nombreux compléments d’approfondissement avec applications corrigées.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1111111111"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781111111113"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=GFcmzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=GFcmzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "fr",
        "previewLink": "http://books.google.com/books?id=GFcmzgEACAAJ&dq=isbn:1111111111&hl=&cd=7&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=GFcmzgEACAAJ&dq=isbn:1111111111&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Micro%C3%A9conomie.html?hl=&id=GFcmzgEACAAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=GFcmzgEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Conçu pour faciliter aussi bien l’apprentissage que la révision, cet ouvrage de microéconomie s’appuie sur: • 14 chapitres synthétiques; • le raisonnement marginaliste au coeur de l’apprentissage de la microéconomie; • une ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "F7LkxgEACAAJ",
      "etag": "SydyjxVChzc",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/F7LkxgEACAAJ",
      "volumeInfo": {
        "title": "Microéconomie",
        "subtitle": "Comportement des agents et concurrence parfaite",
        "authors": [
          "Franck Bien",
          "Sophie Méritet"
        ],
        "publisher": "Pearson",
        "publishedDate": "2024-06-28",
        "description": "Ce manuel présente l'essentiel de ce que doit savoir un étudiant de licence, de bachelor ou de prépas sur les théories du consommateur et du producteur en concurrence pure et parfaite. Il explique notamment les courbes d’indifférences, le taux marginal de substitution (TMS), le travail, l’épargne, les demandes de biens, la fonction de production, les coûts, la maximisation du profit, la fonction d’offre, l’équilibre de la firme... Conçu pour faciliter aussi bien l’apprentissage que la révision, cet ouvrage de microéconomie s’appuie sur: • 14 chapitres synthétiques; • le raisonnement marginaliste au coeur de l’apprentissage de la microéconomie; • une centaine d’exercices avec des corrigés détaillés car la microéconomie ne se comprend qu’en la pratiquant; • une plateforme numérique (eText) avec des éléments supplémentaires d’approfondissement et d’entraînement. Le livre donne accès à des ressources numériques exclusives sur votre eText: • la version en ligne de tous les chapitres de l’ouvrage; • deux chapitres supplémentaires d’introduction sur les notions d’équilibres et d’optimalités; • des annexes mathématiques à la présentation simple sur les méthodes de résolution, le Lagrangien, les dérivées; • une partie des corrigés des exercices du livre; • des exercices corrigés supplémentaires; • de nombreux compléments d’approfondissement avec applications corrigées.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1111111111"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781111111113"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=F7LkxgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=F7LkxgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "fr",
        "previewLink": "http://books.google.com/books?id=F7LkxgEACAAJ&dq=isbn:1111111111&hl=&cd=8&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=F7LkxgEACAAJ&dq=isbn:1111111111&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Micro%C3%A9conomie.html?hl=&id=F7LkxgEACAAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=F7LkxgEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Conçu pour faciliter aussi bien l’apprentissage que la révision, cet ouvrage de microéconomie s’appuie sur: • 14 chapitres synthétiques; • le raisonnement marginaliste au coeur de l’apprentissage de la microéconomie; • une ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "a6vuHAAACAAJ",
      "etag": "cT05RWPFvwM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/a6vuHAAACAAJ",
      "volumeInfo": {
        "title": "Microéconomie",
        "subtitle": "Comportement des agents et concurrence parfaite",
        "authors": [
          "Franck Bien",
          "Sophie Méritet"
        ],
        "publisher": "Pearson",
        "publishedDate": "2024-06-28",
        "description": "Ce manuel présente l'essentiel de ce que doit savoir un étudiant de licence, de bachelor ou de prépas sur les théories du consommateur et du producteur en concurrence pure et parfaite. Il explique notamment les courbes d’indifférences, le taux marginal de substitution (TMS), le travail, l’épargne, les demandes de biens, la fonction de production, les coûts, la maximisation du profit, la fonction d’offre, l’équilibre de la firme... Conçu pour faciliter aussi bien l’apprentissage que la révision, cet ouvrage de microéconomie s’appuie sur: • 14 chapitres synthétiques; • le raisonnement marginaliste au coeur de l’apprentissage de la microéconomie; • une centaine d’exercices avec des corrigés détaillés car la microéconomie ne se comprend qu’en la pratiquant; • une plateforme numérique (eText) avec des éléments supplémentaires d’approfondissement et d’entraînement. Le livre donne accès à des ressources numériques exclusives sur votre eText: • la version en ligne de tous les chapitres de l’ouvrage; • deux chapitres supplémentaires d’introduction sur les notions d’équilibres et d’optimalités; • des annexes mathématiques à la présentation simple sur les méthodes de résolution, le Lagrangien, les dérivées; • une partie des corrigés des exercices du livre; • des exercices corrigés supplémentaires; • de nombreux compléments d’approfondissement avec applications corrigées.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1111111111"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781111111113"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=a6vuHAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=a6vuHAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "fr",
        "previewLink": "http://books.google.com/books?id=a6vuHAAACAAJ&dq=isbn:1111111111&hl=&cd=9&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=a6vuHAAACAAJ&dq=isbn:1111111111&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Micro%C3%A9conomie.html?hl=&id=a6vuHAAACAAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=a6vuHAAACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Conçu pour faciliter aussi bien l’apprentissage que la révision, cet ouvrage de microéconomie s’appuie sur: • 14 chapitres synthétiques; • le raisonnement marginaliste au coeur de l’apprentissage de la microéconomie; • une ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "nrZtzQEACAAJ",
      "etag": "YcAqxj+xiRQ",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/nrZtzQEACAAJ",
      "volumeInfo": {
        "title": "Microéconomie",
        "subtitle": "Comportement des agents et concurrence parfaite",
        "authors": [
          "Franck Bien",
          "Sophie Méritet"
        ],
        "publisher": "Pearson",
        "publishedDate": "2024-06-28",
        "description": "Ce manuel présente l'essentiel de ce que doit savoir un étudiant de licence, de bachelor ou de prépas sur les théories du consommateur et du producteur en concurrence pure et parfaite. Il explique notamment les courbes d’indifférences, le taux marginal de substitution (TMS), le travail, l’épargne, les demandes de biens, la fonction de production, les coûts, la maximisation du profit, la fonction d’offre, l’équilibre de la firme... Conçu pour faciliter aussi bien l’apprentissage que la révision, cet ouvrage de microéconomie s’appuie sur: • 14 chapitres synthétiques; • le raisonnement marginaliste au coeur de l’apprentissage de la microéconomie; • une centaine d’exercices avec des corrigés détaillés car la microéconomie ne se comprend qu’en la pratiquant; • une plateforme numérique (eText) avec des éléments supplémentaires d’approfondissement et d’entraînement. Le livre donne accès à des ressources numériques exclusives sur votre eText: • la version en ligne de tous les chapitres de l’ouvrage; • deux chapitres supplémentaires d’introduction sur les notions d’équilibres et d’optimalités; • des annexes mathématiques à la présentation simple sur les méthodes de résolution, le Lagrangien, les dérivées; • une partie des corrigés des exercices du livre; • des exercices corrigés supplémentaires; • de nombreux compléments d’approfondissement avec applications corrigées.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1111111111"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781111111113"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nrZtzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nrZtzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "fr",
        "previewLink": "http://books.google.com/books?id=nrZtzQEACAAJ&dq=isbn:1111111111&hl=&cd=10&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=nrZtzQEACAAJ&dq=isbn:1111111111&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Micro%C3%A9conomie.html?hl=&id=nrZtzQEACAAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=nrZtzQEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Conçu pour faciliter aussi bien l’apprentissage que la révision, cet ouvrage de microéconomie s’appuie sur: • 14 chapitres synthétiques; • le raisonnement marginaliste au coeur de l’apprentissage de la microéconomie; • une ..."
      }
    }
  ]
}

const noBooksResponse: GoogleBookResponse = {
  "kind": "books#volumes",
  "totalItems": 0
}

export { singleBookResponse, multipleBooksResponse, noBooksResponse}

