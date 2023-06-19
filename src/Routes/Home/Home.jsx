import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../Context/BookContext";
import "../../App.css";
export default function Home() {
  const navigate = useNavigate();
  const { ShelveHandeler, allbooks } = useContext(BookContext);
  return (
    <div>
      <h1
        style={{
          color: "#FF8551",
          border: "groove",
          padding: "2rem",
          fontSize: "50px",
          marginTop: "0",
          letterSpacing:"0.2rem"
        }}
      >
        Bookish Hub
      </h1>
      <button onClick={() => navigate("/search")} className="primary-button">
        Search
      </button>
      <div className="books-currentlyreading">
        <h1 >Currently Reading Books</h1>
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
                    <option value="" >
                      Move to ...
                    </option>
                    <option value="currently reading">currently reading</option>
                    <option value="want to read">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">none</option>
                  </select>
                  <p className="info">{book.name}</p>
                  <p className="info">{book.author}</p>
                  <p className="info">{book.category}</p>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="books-read">
        <h1>Books wanted to be read</h1>
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
                    <option value="" >
                      Move to ...
                    </option>
                    <option value="currently reading">currently reading</option>
                    <option value="want to read">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">none</option>
                  </select>
                  <p className="info">{book.name}</p>
                  <p className="info">{book.author}</p>
                  <p className="info">{book.category}</p>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="books-wanttoread">
        <h1>Read Books</h1>
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
                    <option value="">
                      Move to ...
                    </option>
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
