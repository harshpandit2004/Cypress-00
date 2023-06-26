describe('DOM', () => {
  it('load', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('.main-header').find('#logo').should('have.length', 1) // finds nested image in header
    cy.get('h1').should('have.length', 1) // confirms there is only one h1 tag
    cy.get('h1').contains("My Cypress Course Tasks") // confirms h1 tag contains text
  })
})  