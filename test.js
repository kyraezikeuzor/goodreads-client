import Goodreads from "goodreads-js";

export async function Test() {
  const bookshelf = await Goodreads.getBookshelf("130048134", "read");
  console.log(bookshelf);
}

Test();
