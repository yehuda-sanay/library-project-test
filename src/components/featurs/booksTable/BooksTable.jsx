import "./BooksTable.css";
import React from "react";

export default function BooksTable({books}) {
  console.log(books[0]);
  return (
    <div className="books-table">
      <h1>BooksTable</h1>
      <table>
        <thead>
          {books[0]? Object.keys(books[0])?.map(key=><th>{key}</th>):"" }
        </thead>
      </table>
    </div>
  );
}


