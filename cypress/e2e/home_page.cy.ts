describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  context('content', () => {
    it('the h1 contains the correct text', () => {
      cy.getByData('header')
        .should('exist')
        .should('have.text', 'Hi I am Tomasz')
    })
    it('the nav contains the correct text ', () => {
      cy.get('a').should('exist').eq(0).should('have.text', 'about')
      cy.get('a').should('exist').eq(1).should('have.text', 'portfolio')
      cy.get('a').should('exist').eq(2).should('have.text', 'contact')
    })
  })
  context('navigation', () => {
    it('should navigate to about page', () => {
      cy.get('a').should('exist').eq(0).click()
      cy.location('pathname').should('equal', '/about')
    })
    it('should navigate to portfolio page', () => {
      cy.get('a').should('exist').eq(1).click()
      cy.location('pathname').should('equal', '/portfolio')
    })
    it('should navigate to contact page', () => {
      cy.get('a').should('exist').eq(2).click()
      cy.location('pathname').should('equal', '/contact')
    })
  })
})
