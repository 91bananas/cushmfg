import ProductSketch from '../components/ProductSketch.vue'
import PhotoFrame from '../components/PhotoFrame.vue'

describe('ProductSketch', () => {
  it('draws a placeholder sketch when no scan is provided', () => {
    cy.mount(ProductSketch, { props: { kind: 'mallet', note: 'heavy back' } })
    cy.get('svg[role="img"] path').should('have.length.greaterThan', 2)
    cy.contains('figcaption', 'heavy back')
  })

  it('shows the scanned sketch when one is provided', () => {
    cy.mount(ProductSketch, { props: { src: '/favicon.ico', alt: 'scan' } })
    cy.get('img[alt="scan"]').should('exist')
  })
})

describe('PhotoFrame', () => {
  it('shows a placeholder label until a photo is set', () => {
    cy.mount(PhotoFrame, { props: { label: 'No. 1 Blade' } })
    cy.contains('No. 1 Blade')
  })
})
