/// <reference types="cypress" />

describe('Funcionalidade: Busca no catálogo', () => {

  beforeEach(() => {
    
    cy.visit('catalog.html')
  })

  it('Deve buscar livro usando fixture (livros.json)', () => {
    cy.fixture('livros').then((catalogo) => {
      cy.get('#search-input')
        .should('be.visible')
        .clear()
        .type(catalogo[1].livro)

      cy.get('.card-title > .text-dark')
        .should('contain', catalogo[1].livro)
    })
  })

})
