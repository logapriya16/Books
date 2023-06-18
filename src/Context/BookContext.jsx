import React, { createContext, useState } from "react";
import { Books } from "../backend/books";

export const BookContext = createContext();
export default function BookProvider({ children }) {
  const [allbooks, setAllBooks] = useState(Books);

  const [search, setSearch] = useState(allbooks);
  const SearchHandler = (text) => {
    setSearch(
      search.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const ShelveHandeler = (shelveType, id) => {
    const temp = allbooks.reduce(
      (acc, item) =>
        item._id === id
          ? [...acc, { ...item, shelve: shelveType }]
          : [...acc, { ...item }],
      []
    );
    setAllBooks(temp);
    console.log(allbooks);
  };

  return (
    <BookContext.Provider
      value={{ ShelveHandeler, SearchHandler, search, allbooks }}
    >
      {children}
    </BookContext.Provider>
  );
}
