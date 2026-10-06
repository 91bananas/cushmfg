// https://on.cypress.io/api

describe('Site', () => {
  it('shows the home page', () => {
    cy.visit('/')
    cy.contains('h1', 'by hand')
    cy.get('[data-test="product-card"]').should('have.length.greaterThan', 0)
  })

  it('filters the shop and opens a product', () => {
    cy.visit('/shop')
    cy.contains('button', 'Accessories').click()
    cy.url().should('include', 'c=accessory')
    cy.contains('[data-test="product-card"]', 'Headcover').click()
    cy.contains('h1', 'Hand-Stitched Headcover')
    cy.contains('the original sketch')
  })

  it('pre-selects the model on the custom order form', () => {
    cy.visit('/shop/sawhorse')
    cy.contains('a', 'Order this putter').click()
    cy.get('select').should('have.value', 'sawhorse')
  })
})
