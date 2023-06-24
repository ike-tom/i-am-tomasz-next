describe('The About Page', () => {
  beforeEach(() => {
    cy.visit('/about')
  })
  context('content', () => {
    it('the h1 contains the correct text', () => {
      cy.get('h1').should('exist').contains('WHO AM I')
    })
  })
  context('navigation', () => {
    it('back button navigate to correct page', () => {
      cy.getByData('back-button').should('exist').click()
      cy.location('pathname').should('equal', '/')
    })
  })
})
