export interface Book {
    url: string | null;
    title: string | null;
    author: string | null;
    pubDate: string | null;
    description: string | null;
    cover: string | null;
    isbn13: number | null;
    pages: number | null;
    rating: number | null;
    ratingCount: number | null;
    reviewsCount: number | null;
    top10reviews?: string[] | null;
    language: string | null;
    genres: string[] | null;
}
export type Bookshelf = ((Book & {
    readAt: string | null;
}) | null | undefined)[] | null;
