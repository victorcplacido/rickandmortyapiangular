import config from '../../config/siteConfig'

const cards = 6

context('Home page', () => {
  before(() => {
    cy.visit('/')
  })

  describe('Layout', () => {
    it('contains a header and a footer', () => {
      cy.get('header').should('exist')
      cy.get('footer').should('exist')
    })
  })

  describe('Main', () => {
    it('Should have an h1 with the title and a background image', () => {
      cy.get('h1').should('have.text', config.title)
      cy.get('.hero-image')
        .should('exist')
        .within(() => {
          cy.get('svg').should('exist')
        })
    })

    it('Should show 8 cards', () => {
      cy.get('main').within(() => {
        cy.get('article').should('be.length', cards)
      })
    })

    it('Each card should an image and info about the character', () => {
      cy.get('main article')
        .should('be.length', cards)
        .within(() => {
          cy.get('h2').should('exist')
          cy.get('img').should('exist')
          cy.findByText('Last known location:').should('exist')
          cy.findByText('First seen in:').should('exist')
        })
    })
  })
})
