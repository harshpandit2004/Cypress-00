describe('tasks', () => {
    it('should open and cancel the modal', () => {
        cy.visit('http://127.0.0.1:5173/')
        cy.contains('Add Task').click()
        cy.get('.backdrop').click({force: true})
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')

        cy.contains('Add Task').click()
        cy.contains('Cancel').click()
        cy.get(".backdrop").should('not.exist')
        cy.get('modal').should("not.exist")
    })
})