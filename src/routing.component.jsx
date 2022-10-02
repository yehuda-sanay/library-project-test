import {Route, Routes} from 'react-router-dom'
import { Books,BooksDetails } from './components/pages'
import BooksProvaider from './components/context/booksProvaider.component'


export default function Routing(){
    return(
        <BooksProvaider>
        <Routes>
            <Route path='/' element={<Books/>}/>
            <Route path='Details' element={<BooksDetails/>}/>
        </Routes>
    </BooksProvaider>)
}
