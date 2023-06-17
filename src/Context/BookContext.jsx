import React, { createContext, useState } from "react";
import { Books } from "../backend/books";
export const BookContext = createContext();
export default function BookProvider({ children }) {
  const [shelve, setShelve] = useState({
    currentlyReading: [],
    wantToRead: [],
    Read: [],
    none: [],
  });

  const ShelveHandeler = (shelveType, book) => {
    if (shelveType === "currently reading") {
      if (shelve.wantToRead.includes(book)) {
        setShelve((prev) => ({
          ...prev,
          currentlyReading: shelve.wantToRead.pop(book),
        }));
      }

      if (shelve.Read.includes(book)) {
        setShelve((prev) => ({
          ...prev,
          Read: shelve.Read.pop(book),
        }));
      }

      if (shelve.none.includes(book)) {
        setShelve((prev) => ({
          ...prev,
          none: shelve.none.pop(book),
        }));
      }
      if(!shelve.currentlyReading.includes(book)){
        shelve.currentlyReading.push(book)
      setShelve((prev) => ({
        ...prev,
        currentlyReading: shelve.currentlyReading
      }));
      }
    }
    if (shelveType === "want to read") {
      if (shelve.currentlyReading.includes(book)) {
        setShelve((prev) => ({
          ...prev,
          currentlyReading: shelve.currentlyReading.pop(book),
        }));
      }

      if (shelve.Read.includes(book)) {
        setShelve((prev) => ({
          ...prev,
          Read: shelve.Read.pop(book),
        }));
      }

      if (shelve.none.includes(book)) {
        setShelve((prev) => ({
          ...prev,
          none: shelve.none.pop(book),
        }));
      }
      shelve.wantToRead.push(book)
      setShelve((prev) => ({
        ...prev,
        currentlyReading: shelve.wantToRead
      }));
    }
    if (shelveType === "read") {
      if (shelve.currentlyReading.includes(book)) {
        setShelve((prev) => ({
          ...prev,
          currentlyReading: shelve.currentlyReading.pop(book),
        }));
      }
      
      if (shelve.wantToRead.includes(book)) {
        setShelve((prev) => ({
          ...prev,
          Read: shelve.wantToRead.pop(book),
        }));
      }

      if (shelve.none.includes(book)) {
        setShelve((prev) => ({
          ...prev,
          none: shelve.none.pop(book),
        }));
      }
      if(!shelve.Read.includes(book)){
        shelve.Read.push(book)
      setShelve((prev) => ({
        ...prev,
        currentlyReading: shelve.Read
      }));
      }
    }
    if (shelveType === "none") {
      if (shelve.currentlyReading.includes(book)) {
        setShelve((prev) => ({
          ...prev,
          currentlyReading: shelve.currentlyReading.pop(book),
        }));
      }

      if (shelve.Read.includes(book)) {
        setShelve((prev) => ({
          ...prev,
          Read: shelve.Read.pop(book),
        }));
      }

      if (shelve.wantToRead.includes(book)) {
        setShelve((prev) => ({
          ...prev,
          none: shelve.wantToRead.pop(book),
        }));
      }
      shelve.none.push(book)
      setShelve((prev) => ({
        ...prev,
        currentlyReading: shelve.none
      }));
    }
  };
  console.log(shelve);
  return (
    <BookContext.Provider value={{ ShelveHandeler }}>
      {children}
    </BookContext.Provider>
  );
}
