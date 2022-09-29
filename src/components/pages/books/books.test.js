import { render, screen } from '@testing-library/react';
import Books from './books';

describe("test books",()=>{
    test('render to docoment', () => {
      render(<Books/>);
      const headerElement = screen.getByText("books");
      expect(headerElement).toBeInTheDocument();
    });
    test('check by class',()=>{
        render(<Books/>);
        const divElement = screen.getByText("batel");
        expect(divElement).toHaveClass("books")
    })
    test('check h1 by testid',async()=>{
        render(<Books/>);
        const h1Element =await screen.findByTestId("books component h1");
        expect(h1Element).toBeInTheDocument();})
})
