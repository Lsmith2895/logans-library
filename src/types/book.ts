type GoogleBookResponse = {
    items: GoogleBook[];
    kind: string;
    totalItems: number;
}

type GoogleBook = {
    id: string;
    volumeInfo: VolumeInfo;
}

type VolumeInfo = {
    title: string;
    subtitle?: string;
    authors: string[];
    description?: string;
    publisher?: string;
    publishedDate?: string;
    imageLinks?: {
        smallThumbnail: string;
        thumbnail?: string;
    };
    industryIdentifiers?:{}[];
    pageCount?: number;
    categories?: string[];
    language?: string;
}

export type { GoogleBookResponse, GoogleBook }