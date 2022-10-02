import "./booksDetails.css";
import React, { useContext } from "react";
import BooksTable from '../../featurs/booksTable/BooksTable'
import {booksContext} from '../../context/booksProvaider.component'

function BooksDetails() {
const {books,setBooks}=useContext(booksContext)
return (
  <div className="books-data">
      <h1 data-testid="h1-BooksDetails">BooksDetails</h1>
      <BooksTable books={books}/>
    </div>
  );
};
export default BooksDetails
