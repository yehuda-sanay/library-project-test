import "./Header.css";
import * as React from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function Header() {
  return (
    <div className="header">
      <h1>Header</h1>
      <Stack spacing={2}>
      <Link className="text-link" to="/"><Button variant="contained" disableElevation>
      Books
    </Button></Link>

      <Link className="text-link" to="Details"><Button variant="contained" disableElevation>
      Details
    </Button></Link>
    </Stack>
    </div>
  );
};



