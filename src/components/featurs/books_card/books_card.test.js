import { render, screen } from '@testing-library/react';
import BooksCard from './books_card';

describe("test books card",()=>{
    test('render to docoment', () => {
      render(<BooksCard/>);
      const headerElement = screen.getByText("books_card");
      expect(headerElement).toBeInTheDocument();
    });
    test('check by class',()=>{
        render(<BooksCard/>);
        const divElement = screen.getByText("batel");
        expect(divElement).toHaveClass("books-card")
    })
    test('check h1 by testid',async()=>{
        render(<BooksCard/>);
        const h1Element =await screen.findByTestId("bookCard");
        expect(h1Element).toBeInTheDocument();})
})
