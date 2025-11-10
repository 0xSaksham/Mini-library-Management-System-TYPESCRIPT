import { Repository } from "../repository/Repository";
import { Book } from "../interfaces/Book";
import { Member } from "../interfaces/Member";

export class Library {
  private booksRepo = new Repository<Book>();
  private membersRepo = new Repository<Member>();

  addBook(book: Book): void {
    // Basic validation: ensure required fields are present
    if (!book || typeof book.id !== "number") {
      throw new Error("Invalid book: missing or invalid 'id'");
    }
    if (!book.name || !book.author || !book.genre) {
      throw new Error(
        "Invalid book: 'name', 'author' and 'genre' are required"
      );
    }

    // Prevent duplicate IDs
    if (this.booksRepo.findById(book.id)) {
      throw new Error(`Book with id ${book.id} already exists`);
    }

    // Store a shallow copy to avoid external mutation
    this.booksRepo.add({ ...book });
  }

  getAllBooks(): Book[] {
    return this.booksRepo.getAll();
  }

  findBook(bookId: number): Book | undefined {
    return this.booksRepo.findById(bookId);
  }

  registerMember(member: Member): void {
    this.membersRepo.add(member);
  }

  memberDetails(memberId: number): Member | undefined {
    return this.membersRepo.findById(memberId);
  }

  getAllMembers(): Member[] {
    return this.membersRepo.getAll();
  }

  associateMemberToBook(bookId: number, memberId: number) {
    const book = this.booksRepo.findById(bookId);
    const member = this.membersRepo.findById(memberId);

    if (!book) return "Book does not exits in the Library !!";

    if (!member) return "This member is not registered in The Library !!";

    if (book.borrowedBy) return "Book is already borrowed !!";

    book.borrowedBy = member.id;
    member.books.push(book);
    return `${member.name} has borrowed "${book.name}"`;
  }
}
