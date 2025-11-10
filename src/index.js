"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
var Library_1 = require("./library/Library");
var Genre_1 = require("./enums/Genre");
var books_json_1 = require("./data/books.json");
var members_json_1 = require("./data/members.json");
var library = new Library_1.Library();
var books = books_json_1.default.map(function (b) {
  return __assign(__assign({}, b), {
    genre: Genre_1.Genre[b.genre.replace("-", "").replace(" ", "")],
  });
});
var members = members_json_1.default;
books.forEach(function (book) {
  return library.addBook(book);
});
members.forEach(function (member) {
  return library.registerMember(member);
});
console.log(
  "-----------------------------All Books------------------------------------"
);
console.log("All Books:", JSON.stringify(library.getAllBooks(), null, 2));
console.log(
  "\n\n-----------------------------All Members------------------------------------"
);
console.log("All Members:", JSON.stringify(library.getAllMembers(), null, 2));
console.log(
  "\n\n-----------------------------Finding Book and Member------------------------------------"
);
console.log("Finding book by id 2 " + JSON.stringify(library.findBook(2)));
console.log(
  "Finding member by id 3 " + JSON.stringify(library.memberDetails(3))
);
console.log(
  "\n\n-----------------------------Asscoicating Book 2 with Member 1 ------------------------------------"
);
console.log(library.associateMemberToBook(2, 1));
console.log(
  "\n\n-----------------------------Adding new Book and Member------------------------------------"
);
library.registerMember({
  id: 4,
  name: "Harsh",
  email: "harsh@gmail.com",
  books: [],
});
library.addBook({
  id: 5,
  name: "Gunaho Ka Devta",
  author: "Dharamvir Bharti",
  genre: Genre_1.Genre.Fiction,
});
console.log(
  "All Books after updation:",
  JSON.stringify(library.getAllBooks(), null, 2)
);
console.log(
  "All Members after updation:",
  JSON.stringify(library.getAllMembers(), null, 2)
);
