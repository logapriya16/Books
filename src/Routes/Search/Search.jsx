import React, { useContext } from "react";
import "../../App.css";
import { BookContext } from "../../Context/BookContext";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const { ShelveHandeler, SearchHandler, search, fixShelve } =
    useContext(BookContext);
  const navigate = useNavigate();
  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="search a book"
        onChange={(e) => SearchHandler(e.target.value)}
      />
      <button onClick={() => navigate("/")}>Home</button>
      <div>
        <ul className="books">
          {" "}
          {search.map((book) => {
            return (
              <li className="books-container" type="none" key={book._id}>
                <img
                  src={book.img}
                  className="books-img"
                  alt="book-img-comes-here"
                />
                <select
                  name="shelve"
                  id="shelve-selection"
                  className="shelve-container"
                  onChange={(e) => {
                    ShelveHandeler(e.target.value, book._id);
                    fixShelve(book, book._id, e.target.value);
                  }}
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
                <p>{book.shelve}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
