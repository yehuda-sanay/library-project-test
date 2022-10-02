import { screen, render } from "@testing-library/react";
import BooksDetails from "./booksDetails";

describe("test books details component",()=>{
    it("h1 text",async()=>{
        render(<BooksDetails/>);
        expect(await screen.findByTestId("h1-BooksDetails")).toHaveTextContent("BooksDetails");
    });
});
