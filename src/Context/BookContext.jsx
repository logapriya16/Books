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
   const temp=allbooks.reduce(
    (acc, item) =>
      item._id === id
        ? [...acc, { ...item, categoryName: shelveType }]
        : [...acc, { ...item }],
    []
  )
    setAllBooks(temp);
    console.log(shelveType);
    // if (shelveType === "currently reading") {
    //   //console.log(shelveType);
    //   setShelve(shelveType);
    //   fixShelve();
    // }

    // else if (shelveType === "want to read") {
    //   setShelve(shelveType);
    //   fixShelve();
    // }

    // else if (shelveType === "read") {
    //   setShelve(shelveType);
    //   fixShelve();
    // }
    // else  {
    //   setShelve(shelveType);
    //   fixShelve();
    // }
  };
  //console.log(shelve);
  const fixShelve = (book, id) => {
    // console.log(sheelve, "inside fix");
    // Books.map((item) =>
    //   item._id === id ? (item.shelve = sheelve) : item.shelve
    // );
  };

  return (
    <BookContext.Provider
      value={{ ShelveHandeler, fixShelve, SearchHandler, search , allbooks}}
    >
      {children}
    </BookContext.Provider>
  );
}
