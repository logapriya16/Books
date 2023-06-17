import React, { createContext, useState } from "react";
import { Books } from "../backend/books";
import { v4 as uuid } from "uuid";

export const BookContext = createContext();
export default function BookProvider({ children }) {
  const [search, setSearch] = useState(Books);
  const SearchHandler = (text) => {
    console.log(text);
    setSearch(
      Books.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };
  const [shelve, setShelve] = useState({
    currentlyReading: [
      {
        _id: uuid(),

        name: "Collected Short Stories, The (The Penguin Ray Library)",
        author: " Satyajit Ray",
        category: "classic-fiction",
        img: "https://m.media-amazon.com/images/I/51U9tK6DkKL._SX325_BO1,204,203,200_.jpg",
      },
      {
        _id: uuid(),

        name: "The Complete Novels of Sherlock Holmes",
        author: "  Arthur Conan Doyle",
        category: "classic-fiction",
        img: "https://m.media-amazon.com/images/I/61Q7MHNU9qL._SY498_BO1,204,203,200_.jpg",
      },
    ],
    wantToRead: [
      {
        _id: uuid(),

        name: "The Time Machine",
        author: " H. G. Wells ",
        category: "classic-fiction",
        img: "https://m.media-amazon.com/images/I/51YP7fM361S._SX460_BO1,204,203,200_.jpg",
      },
    ],
    Read: [
      {
        _id: uuid(),

        name: "108 Panchatantra Stories for Children",
        author: "Maple Press",
        category: "children",
        img: "https://m.media-amazon.com/images/I/51trTdAFECL._SX385_BO1,204,203,200_.jpg",
      },
    ],
    none: [],
  });

  const IsCurrentlyReading = (item) => {
    return shelve.currentlyReading.includes(item);
  };
  const IsWantToRead = (item) => {
    shelve.wantToRead.includes(item);
  };
  const IsRead = (item) => {
    shelve.Read.includes(item);
  };
  const IsNone = (item) => {
    shelve.none.includes(item);
  };
  const ShelveHandeler = (shelveType, book) => {};
  console.log(shelve);
  return (
    <BookContext.Provider value={{ ShelveHandeler, shelve, SearchHandler ,search,}}>
      {children}
    </BookContext.Provider>
  );
}
