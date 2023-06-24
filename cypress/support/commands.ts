/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    // eslint-disable-next-line no-undef
    getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
  }
}

Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-test=${selector}]`)
})
