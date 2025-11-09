import { Repository } from "../repository/Repository";
import { Book } from "../interfaces/Book";
import { Member } from "../interfaces/Member";

export class Library{
    private booksRepo = new Repository<Book>();
    private memebersRepo = new Repository<Member>();

    addBook(book : Book):void {
        this.booksRepo.add(book);
    }

    getAllBooks() : Book[] {
        return this.booksRepo.getAll();
    }

    findBook(bookId : number) : Book | undefined {
        return this.booksRepo.findById(bookId);
    }

    registerMemeber(member : Member) : void {
        this.memebersRepo.add(member);
    }

    memberDetails(memberId : number) : Member | undefined {
        return this.memebersRepo.findById(memberId);
    }

    getAllMembers() : Member[] {
        return this.memebersRepo.getAll();
    }

    associateMemberToBook(bookId : number, memberId : number)
    {
        const book = this.booksRepo.findById(bookId);
        const member = this.memebersRepo.findById(memberId);

        if(!book ) return "Book does not exits in the Library !!";
        
        if(!member) return "This member is not registered in The Library !!";

        if(book.borrowedBy) return "Book is already borrowed !!";

        book.borrowedBy = member.id;
        return `${member.name} has borrowed "${book.name}"`;
    }
} 