import getBook from "./api/get-book";
import getBookshelf from "./api/get-bookshelf";
declare const Goodreads: {
    getBook: typeof getBook;
    getBookshelf: typeof getBookshelf;
};
export default Goodreads;
