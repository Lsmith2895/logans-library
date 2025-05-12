type GoogleBookResponse = {
  items?: GoogleBook[];
  kind: string;
  totalItems: number;
};

type GoogleBook = {
  id: string;
  volumeInfo: VolumeInfo;
  kind: string;
  etag: string;
  selfLink: string;
  saleInfo: {};
  accessInfo: {};
  searchInfo?: {
    textSnippet: string;
  };
};

type VolumeInfo = {
  title: string;
  subtitle?: string;
  authors: string[];
  description?: string;
  publisher?: string;
  publishedDate?: string;
  readingModes: {};
  printType: string;
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
  };
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: {};
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  industryIdentifiers?: {}[];
  pageCount?: number;
  categories?: string[];
  language?: string;
  averageRating?: number;
  ratingsCount?: number;
};

export type { GoogleBookResponse, GoogleBook };
