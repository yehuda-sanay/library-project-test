import {Route, Routes} from 'react-router-dom'
import { Books,BooksDetails } from './components/pages'
import BooksProvaider from './components/context/booksProvaider.component'


export default function Routing(){
    return(
        <Routes>
            <Route path='/' element={<BooksProvaider><Books/></BooksProvaider>}/>
            <Route path='Details' element={<BooksProvaider><BooksDetails/></BooksProvaider>}/>
        </Routes>
    )
}
