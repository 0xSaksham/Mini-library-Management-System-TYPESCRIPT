import { Library } from "./library/Library";
import { Book } from "./interfaces/Book";
import { Member } from "./interfaces/Member";
import { Genre } from "./enums/Genre";
import membersData from "./data/members.json";
import { fetchBooks } from "./utils/fetchBooks";

const library = new Library();

async function main(): Promise<void> {
  try {
    // Fetch books (simulated async source)
    const books: Book[] = await fetchBooks();

    // If books came from JSON with strings, you'd map genres here. Our fetchBooks returns proper Genre values.
    books.forEach((book) => library.addBook(book));

    // Load members from the local JSON file
    const members: Member[] = membersData;
    members.forEach((member) => library.registerMember(member));

    console.log(
      "-----------------------------All Books------------------------------------"
    );
    console.log("All Books:", JSON.stringify(library.getAllBooks(), null, 2));

    console.log(
      "\n\n-----------------------------All Members------------------------------------"
    );
    console.log(
      "All Members:",
      JSON.stringify(library.getAllMembers(), null, 2)
    );

    console.log(
      "\n\n-----------------------------Finding Book and Member------------------------------------"
    );
    console.log("Finding book by id 2:", library.findBook(2));
    console.log("Finding member by id 3:", library.memberDetails(3));

    console.log(
      "\n\n-----------------------------Associating Book 2 with Member 1 ------------------------------------"
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
      genre: Genre.Fiction,
    });

    console.log(
      "All Books after updation:",
      JSON.stringify(library.getAllBooks(), null, 2)
    );
    console.log(
      "All Members after updation:",
      JSON.stringify(library.getAllMembers(), null, 2)
    );
  } catch (err) {
    console.error("Error during startup:", err);
    process.exitCode = 1;
  }
}

// Run main
void main();
