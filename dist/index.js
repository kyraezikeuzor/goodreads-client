import getBook from "./api/get-book";
import getBookshelf from "./api/get-bookshelf";
const Goodreads = {
    getBook,
    getBookshelf,
};
export default Goodreads;
/*
export async function test() {
  const bookshelf = await getBookshelf("130048134", "read");
  console.log(bookshelf);
}

test();

export default test;
*/
//# sourceMappingURL=index.js.map