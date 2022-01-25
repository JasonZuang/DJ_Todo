//Best seller booklist copy
import React from "react";
import ReactDom from "react-dom";

//css
import "./index.css";

//importing books
import {books} from './books'
import Book from './Book'

const PageTitle = () => {
  return (
    <div>
      <div>
        <h1 className="pagetitle">Jason's Books</h1>
      </div>
      <BookList />
    </div>
  );
};

const BookList = () => {
  return (
    <section className="booklist">
      {" "}
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

ReactDom.render(<PageTitle />, document.getElementById("root"));
