import "./books.css";
import React, { useContext } from "react";
import {booksContext} from '../../context/booksProvaider.component'
import BooksCard from '../../featurs/books_card/books_card'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Books() {
  const {books,setBooks}=useContext(booksContext)
  return (
    <div className="books">
      <h1 data-testid="books component h1" className="books-h1">books</h1>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {books?.map((book)=>(<Grid item xs={3}><BooksCard books={book}/></Grid>))}
          
      </Grid>
    </Box>
      
    </div>
  );
};





    