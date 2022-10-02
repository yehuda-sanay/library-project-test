describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000')
    })
  })
//   describe("headr component",()=>{
//     before(()=>{
//         cy.visit("/")
//     })

  describe("book card page",()=>{
    before(()=>{
        cy.visit("/")
    })
    it("header h1 text",()=>{
        cy.get('.header > h1').contains("Header")
    })
    it("header class",()=>{
        cy.get('.header').should('have.class', 'header')
    })
    it("header books button text",()=>{
        cy.get('[href="/"] > .MuiButtonBase-root').contains("Books").click()
    })
    it("h1 text",()=>{
        cy.get('[data-testid="books component h1"]').contains("books")
    })
    it("h1 color",()=>{
        cy.get('[data-testid="books component h1"]').should("have.css","color","rgb(0, 0, 0)")
    })
    it("h1 class",()=>{
        cy.get('[data-testid="books component h1"]').should('have.class', 'books-h1')
    })
    it("card link class",()=>{
        cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardActions-root > .MuiButtonBase-root > .link_card').should('have.class', 'link_card')
    })
    it("button card have link contain link",()=>{
        cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardActions-root > .MuiButtonBase-root').should('have.class', 'btn_card')
    })
    it("button card have text",()=>{
        cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardActions-root > .MuiButtonBase-root > .link_card').contains("read")
    })
    it("header details button text",()=>{
        cy.get('[href="/Details"] > .MuiButtonBase-root').contains("Details").click()
    })
    
  })
  describe("detalis page",()=>{
    it("h1 have sext",()=>{
        cy.get('[data-testid="h1-BooksDetails"]').contains("BooksDetails")
    })
    it("h1 have data-test-id",()=>{
        cy.get('[data-testid="h1-BooksDetails"]').invoke('attr', 'data-test-id')
    })
    it("div have class name",()=>{
        cy.get('.books-data').should("have.class","books-data")
    })
    it("book details have the text Things Fall Apart in is children",()=>{
        cy.get('.books-data').children()
        .should('contain', 'Things Fall Apart')
        
    })
    
  })