import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BooksTable({books}) {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
            {books?
                (Object.keys(books[0]).map((item,index)=><TableCell key={index}  align="right">{item}</TableCell>))
                :
                (<TableCell> </TableCell>)
            }
            </TableRow>
        </TableHead>
        <TableBody>
            {books?
                (books.map((obj,index) =>
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {Object.values(obj).map(item =><TableCell  align="right">{item}</TableCell>)}
                    </TableRow>))
                :
                (<TableCell></TableCell>)
            }
        </TableBody>
    </Table>
    </TableContainer>
    );
}

