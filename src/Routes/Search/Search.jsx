import React, { useContext } from "react";
import { Books } from "../../backend/books";
import "./Search.css";
import { BookContext } from "../../Context/BookContext";
export default function Search() {
  const { ShelveHandeler } = useContext(BookContext);
  return (
    <div className="search-container">
      <input type="search" placeholder="search a book" />
      <div className="books">
       <ul className="books"> {Books.map((book) => {
          return (
            <li className="books-container" type="none" key={book._id} >
              <img
                src={book.img}
                className="books-img"
                alt="book-img-comes-here"
              />
              <select
                name="shelve"
                id="shelve-selection"
                className="shelve-container"
                onChange={(e) => ShelveHandeler(e.target.value, book )}
              >
                <option value="">Move to ...</option>
                <option value="currently reading">currently reading</option>
                <option value="want to read">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">none</option>
              </select>
              <p>{book.name}</p>
              <p>{book.author}</p>
              <p>{book.category}</p>
            </li>
          );
        })}
        </ul>
      </div>
    </div>
  );
}