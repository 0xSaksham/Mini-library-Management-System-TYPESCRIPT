"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Repository_1 = require("../repository/Repository");
var Library = /** @class */ (function () {
  function Library() {
    this.booksRepo = new Repository_1.Repository();
    this.membersRepo = new Repository_1.Repository();
  }
  Library.prototype.addBook = function (book) {
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
      throw new Error("Book with id " + book.id + " already exists");
    }
    // Store a shallow copy to avoid external mutation
    this.booksRepo.add(Object.assign({}, book));
  };
  Library.prototype.getAllBooks = function () {
    return this.booksRepo.getAll();
  };
  Library.prototype.findBook = function (bookId) {
    return this.booksRepo.findById(bookId);
  };
  Library.prototype.registerMember = function (member) {
    this.membersRepo.add(member);
  };
  Library.prototype.memberDetails = function (memberId) {
    return this.membersRepo.findById(memberId);
  };
  Library.prototype.getAllMembers = function () {
    return this.membersRepo.getAll();
  };
  Library.prototype.associateMemberToBook = function (bookId, memberId) {
    var book = this.booksRepo.findById(bookId);
    var member = this.membersRepo.findById(memberId);
    if (!book) return "Book does not exits in the Library !!";
    if (!member) return "This member is not registered in The Library !!";
    if (book.borrowedBy) return "Book is already borrowed !!";
    book.borrowedBy = member.id;
    member.books.push(book);
    return "".concat(member.name, ' has borrowed "').concat(book.name, '"');
  };
  return Library;
})();
exports.Library = Library;
