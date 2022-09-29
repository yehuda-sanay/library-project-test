import "./BooksTable.css";
import React from "react";

export default function BooksTable({books}) {
  const {author,country,language,link,pages,title,year}=books
  return (
    <div className="books-table">
      <h1>BooksTable</h1>
      <table>
        <thead>
          {books[0]?.map( book =>{Object.keys(book).map(key=>{<th>{key}</th>})
          })}
        </thead>
      </table>
    </div>
  );
}


