import { createContext, useEffect, useState } from 'react'

const booksContext = createContext()

export default function BooksProvaider({children}){
    const [books,setBooks]= useState([])
    useEffect(()=>{},[])

    return(
        <booksContext.Provider value={[books,setBooks]}>
            {children}
        </booksContext.Provider>
    )
}