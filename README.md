# goodreads-client

A TypeScript Goodreads book parser for Node.js that extracts book data and bookshelf information from Goodreads.

## Installation

```bash
npm install goodreads-client
```

## Usage

First, import the library:

```typescript
import Goodreads from "goodreads-client";
```

### Get Book Information

Fetch detailed information about a book using its ISBN.
Usage: Goodreads.getBook(isbn13).

```typescript
try {
  const data = await Goodreads.getBook("9781501128035");
  console.log("Book Data:", data);
} catch (error) {
  console.log("Error:", error);
}
```

#### Response Format

```typescript
{
  url: 'https://www.goodreads.com/search?q=9781501128035',
  title: 'The Unhoneymooners',
  author: 'Christina Lauren',
  pubDate: 'May 14, 2019',
  description: 'Olive is always unlucky: in her career, in love, in…well, everything...',
  cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1548201335i/42201431.jpg',
  isbn13: '9781501128035',
  pages: 432,
  rating: 3.9,
  ratingCount: 1068296,
  reviewsCount: 97111,
  language: 'English',
  genres: [
    'Contemporary',
    'Enemies To Lovers',
    'Fiction',
    'Contemporary Romance',
    'Audiobook',
    'Romance',
    'Chick Lit'
  ]
}
```

### Get Bookshelf

Retrieve books from a user's specific bookshelf.
Usage: Goodreads.getBookshelf(userId, shelfName).

```typescript
try {
  const data = await Goodreads.getBookshelf("130048134", "read");
  console.log("Bookshelf Data:", data);
} catch (error) {
  console.log("Error:", error);
}
```

#### Parameters

- `userId` (string): The Goodreads user ID
- `shelfName` (string): The name of the shelf (e.g., "read", "to-read", "currently-reading")

#### Response Format

Returns an array of book objects with the same structure as `getBook()`, plus a `readAt` field indicating when the book was added to the shelf. Some array items may be `null` if the book data couldn't be parsed.

```typescript
[
  {
    url: 'https://www.goodreads.com/search?q=9780448494517',
    title: 'A Reaper at the Gates',
    author: 'Sabaa Tahir',
    pubDate: 'June 12, 2018',
    // ... other book properties
    readAt: ''
  },
  null, // Some entries may be null if parsing failed
  {
    // ... another book object
    readAt: 'Jun 2025'
  }
  // ... more books
]
```

## Alternative Usage

You can also search by ISBN13 directly:

```typescript
const result = await Goodreads.getBook("1524759783");
```

## Book Data Fields

| Field | Type | Description |
|-------|------|-------------|
| `url` | `string \| null` | Goodreads search URL |
| `title` | `string \| null` | Book title |
| `author` | `string \| null` | Author name |
| `pubDate` | `string \| null` | Publication date |
| `description` | `string \| null` | Book description |
| `cover` | `string \| null` | Cover image URL |
| `isbn13` | `string \| null` | ISBN-13 identifier |
| `pages` | `number \| null` | Number of pages |
| `rating` | `number \| null` | Average rating |
| `ratingCount` | `number \| null` | Total number of ratings |
| `reviewsCount` | `number \| null` | Total number of reviews |
| `language` | `string \| null` | Book language |
| `genres` | `string[] \| null` | Array of genre tags |
| `readAt` | `string \| null` | Date added to shelf (bookshelf only) |

## TypeScript Support

This package includes full TypeScript definitions. The main types exported are:

- `Book`: Individual book data structure
- `Bookshelf`: Array of books from a user's shelf

## Error Handling

Always wrap API calls in try-catch blocks as the methods can throw errors for:
- Invalid ISBNs
- Network issues
- Parsing failures
- Invalid user IDs or shelf names

## License

MIT

## Contributing

Issues and pull requests are welcome on GitHub.
