import {Route, Routes} from 'react-router-dom'
import { Books,BooksDetails } from './components/pages'


export default function Routing(){
    return(
        <Routes>
            <Route path='/' element={<Books/>}/>
            <Route path='Details' element={<BooksDetails/>}/>
        </Routes>
    )
}
