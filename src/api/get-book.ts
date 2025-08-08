import * as cheerio from "cheerio";
import { Book } from "../types";
import axios from "axios";

export async function getBook(isbn13: string): Promise<Book> {
  const searchUrl = `https://www.goodreads.com/search?q=${isbn13}`;

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
    const responseUrl = response.config.url;
    const bookContainer = document("html");
    const bookContext = JSON.parse(
      bookContainer.find("script[type=application/ld+json]").text()
    );

    const url = responseUrl;
    const title = bookContainer.find(".Text__title1").text()?.trim() || null;
    const author = bookContext.author[0].name || null;
    const pubDate =
      bookContainer
        .find("p[data-testid=publicationInfo]")
        .text()
        .trim()
        .replace("First published ", "") || null;
    const description =
      bookContainer
        .find(
          "div.BookPageMetadataSection__description .DetailsLayoutRightParagraph__widthConstrained"
        )
        .text() || null;
    const cover =
      bookContainer.find(".BookCover__image>div>img")?.attr("src") || null;
    const isbn13 = bookContext.isbn || null;
    const pages = bookContext.numberOfPages || null;
    const rating = bookContext.aggregateRating.ratingValue || null;
    const ratingCount = bookContext.aggregateRating.ratingCount || null;
    const reviewsCount = bookContext.aggregateRating.reviewCount || null;
    //const top10reviews = $(element);
    const language = bookContext.inLanguage || null;

    const genres = () => {
      let genres = [];
      const genresContainer = bookContainer.find("div[data-testid=genresList]");
      const genresList = genresContainer.find(
        "span.BookPageMetadataSection__genreButton"
      );
      genresList.each((_, element) => {
        const name = document(element)
          .find("a span.Button__labelItem")
          .text()
          .trim();

        genres.push(name);
      });

      return genres;
    };

    const book: Book = {
      url: url,
      title: title,
      author: author,
      pubDate: pubDate,
      description: description,
      cover: cover,
      isbn13: isbn13,
      pages: pages,
      rating: rating,
      ratingCount: Number(ratingCount),
      reviewsCount: reviewsCount,
      language: language,
      genres: genres() || null,
    };

    return book;
  } catch (error: any) {
    console.error(
      `Couldn't fetch book with ISBN number ${isbn13}. (The ISBN number may be invalid). \nError:`,
      error.message
    );
  }
}

export default getBook;
