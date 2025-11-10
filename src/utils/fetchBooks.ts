import { Book } from "../interfaces/Book";
import { Genre } from "../enums/Genre";

export function fetchBooks(): Promise<Book[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "1984", author: "George Orwell", genre: Genre.Fiction },
        {
          id: 2,
          name: "A Brief History of Time",
          author: "Stephen Hawking",
          genre: Genre.NonFiction,
        },
      ]);
    }, 500);
  });
}
