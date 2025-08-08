import * as cheerio from "cheerio";
import { Book, Bookshelf } from "../types";
import { getBook } from "./get-book";
import axios from "axios";

export async function getBookshelf(
  username: string,
  shelfType: string
): Promise<Bookshelf | null> {
  const searchUrl = `https://www.goodreads.com/review/list/${username}?&shelf=${shelfType}&per_page=infinite&utf8=%E2%9C%93`;
  let books;

  try {
    const options = {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        Connection: "keep-alive",
      },
    };

    const response = await axios(searchUrl, options);
    const document = cheerio.load(response.data);

    const booksContainer = document("#booksBody");
    const booksOnPage = booksContainer.find("tr.bookalike");

    books = await Promise.all(
      booksOnPage.map(async (_, element) => {
        const isbn13 =
          document(element).find("td.isbn13 div.value").text().trim() || "";

        let book: Book | null;
        let readAt: string;

        if (isbn13.length > 1) {
          book = (await getBook(isbn13)) || null;

          if (book) {
            console.log("Grabbing book with ISBN: ", isbn13);

            readAt = document(element)
              .find("td.date_read div.value .date_read_value")
              .text()
              .trim();

            readAt ? readAt : null;

            //const userRating = $(element).find('.stars').html() || 'No rating';
            //const userReview = $(element).find('td.review div.value').text().trim() || 'No review';

            return {
              ...book,
              readAt: readAt,
            };
          }
        } else {
          return null;
        }
      })
    );

    //console.log(`Found ${books.length} books on ${shelfType} bookshelf.`);
  } catch (error: any) {
    console.error(
      `Couldn't fetch ${shelfType} bookshelf from ${username}. \nError:`,
      error.message
    );
  } finally {
    return books ? books : null;
  }
}

export default getBookshelf;
