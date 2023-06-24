describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact')
  })
  context('content', () => {
    it('the h1 contains the correct text', () => {
      cy.get('h1').should('exist').contains('Get in touch')
    })
  })

  it('should display contact options with correct links', () => {
    cy.get('a')
      .eq(0)
      .should('have.attr', 'href', 'mailto:tomasz.ikert.frontend@gmail.com')

    cy.get('a').eq(1).should('have.attr', 'href', 'https://github.com/ike-tom')

    cy.get('a')
      .eq(2)
      .should('have.attr', 'href', 'https://www.linkedin.com/in/tomaszikert/')
  })
  context('navigation', () => {
    it('back button navigate to correct page', () => {
      cy.getByData('back-button').should('exist').click()
      cy.location('pathname').should('equal', '/')
    })
  })
})
