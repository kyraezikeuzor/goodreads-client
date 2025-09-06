import { Book } from "../types";
export declare function getBook(isbn13: string): Promise<Book | null>;
export default getBook;
