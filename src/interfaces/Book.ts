import { Genre } from "../enums/Genre";

export interface Book {
  id: number;
  name: string;
  author: string;
  genre: Genre;
  borrowedBy?: number; // User ID of the borrower
}
