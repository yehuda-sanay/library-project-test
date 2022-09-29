const BOOKS_API="https://my-json-server.typicode.com/Jeck99/books-api/books"
async function getBooksApi(){
try {return await fetch(BOOKS_API)
    .then(res=>res.json())
} catch (error) {alert(error)
    
}
}

export default getBooksApi;

