import getBook from "./api/get-book";
import getBookshelf from "./api/get-bookshelf";

//export { getBook, getBookshelf };
export async function test() {
  const bookshelf = await getBookshelf("130048134", "read");
  console.log(bookshelf);
}

test();

export default test;
