import { createContext, useEffect, useState } from 'react'
import getBooksApi from '../../servies/booksApi'
export const booksContext = createContext()

export default function BooksProvaider({children}){
    const [books,setBooks]= useState([])
    useEffect(()=>{getBooksApi()
        .then(res=>setBooks(res))},[])
        console.log(books)

    return(
        <booksContext.Provider value={{books,setBooks}}>
            {children}
        </booksContext.Provider>
    )
}