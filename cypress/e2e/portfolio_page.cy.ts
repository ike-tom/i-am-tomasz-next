describe('Portfolio Page', () => {
  beforeEach(() => {
    cy.visit('/portfolio')
  })
  context('content', () => {
    it('the h1 contains the correct text', () => {
      cy.get('h1').should('exist').contains('Portfolio')
    })
  })

  it('should portfolio projects with correct links', () => {
    cy.get('a')
      .eq(0)
      .should(
        'have.attr',
        'href',
        'https://github.com/team-prstmw/StarWarsQuiz',
      )

    cy.get('a')
      .eq(1)
      .should('have.attr', 'href', 'https://github.com/ike-tom/space-tourism')

    cy.get('a')
      .eq(2)
      .should('have.attr', 'href', 'https://github.com/topics/oj-mat-api')

    cy.get('a')
      .eq(3)
      .should(
        'have.attr',
        'href',
        'https://github.com/ike-tom/fake-news-network-FE',
      )
  })
  context('navigation', () => {
    it('back button navigate to correct page', () => {
      cy.getByData('back-button').should('exist').click()
      cy.location('pathname').should('equal', '/')
    })
  })
})
