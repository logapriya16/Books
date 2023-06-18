import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../Context/BookContext";
import "../../App.css";
export default function Home() {
  const navigate = useNavigate();
  const { ShelveHandeler, allbooks } = useContext(BookContext);
  return (
    <div>
      <h1>Books Manager</h1>
      <button onClick={() => navigate("/search")}>Search</button>
      <div className="books-currentlyreading">
        <h3>Currently Reading Books</h3>
        <ul className="books-shelve">
          {allbooks
            .filter((item) => item.shelve === "currently reading")
            .map((book) => {
              return (
                <li type="none">
                  <img
                    src={book.img}
                    className="books-img"
                    alt="book-img-comes-here"
                  />
                  <select
                    name="shelve"
                    id="shelve-selection"
                    className="shelve-container"
                    onChange={(e) => ShelveHandeler(e.target.value, book._id)}
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
      <div className="books-read">
        <h3>Books wanted to be read</h3>
        <ul className="books-shelve">
          {allbooks
            .filter((item) => item.shelve === "want to read")
            .map((book) => {
              return (
                <li type="none">
                  <img
                    src={book.img}
                    className="books-img"
                    alt="book-img-comes-here"
                  />
                  <select
                    name="shelve"
                    id="shelve-selection"
                    className="shelve-container"
                    onChange={(e) => ShelveHandeler(e.target.value, book._id)}
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
      <div className="books-wanttoread">
        <h3>Read Books</h3>
        <ul className="books-shelve">
          {allbooks
            .filter((item) => item.shelve === "read")
            .map((book) => {
              return (
                <li type="none">
                  <img
                    src={book.img}
                    className="books-img"
                    alt="book-img-comes-here"
                  />
                  <select
                    name="shelve"
                    id="shelve-selection"
                    className="shelve-container"
                    onChange={(e) => ShelveHandeler(e.target.value, book._id)}
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
