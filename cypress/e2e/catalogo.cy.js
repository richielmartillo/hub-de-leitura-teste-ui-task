/// <reference types="cypress"/>

describe('Funcionalidade: Catálogo de livros', () => {
  beforeEach(() => {
    cy.visit('catalog.html')
  })

  it('Deve clicar no botão Àdicionar a Cesta', () => {
    cy.get(
      ':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary',
    ).click()
    cy.get('#cart-count').should('contain', 1)
  })

  it('Deve clicar em todos os botões Adicionar à cesta', () => {
    cy.get('.btn-primary').click({ multiple: true })
  })

  it('Deve clicar no primeiro botão Adicionar à cesta', () => {
    cy.get('.btn-primary').first().click()
  })
  it('Deve clicar no último botão Adicionar á cesta', () => {
    cy.get('.btn-primary').last().click()
  })

  it('Deve clicar no terceiro botão Adicionar a cesta ', () => {
    cy.get('.btn-primary').eq(2).click()
  })

  it('Deve clicar no terceiro botão e mostrar alerta de sucesso', () => {
    cy.get('.btn-primary').eq(2).click()

    cy.get('#global-alert-container')
      .should('be.visible')
      .and('contain', 'adicionado')
  })

  it('Deve aumentar o contador da cesta ao adicionar o livro do índice 2', () => {
    // pega o número atual do badge
    cy.get('header').then(($header) => {
      const texto = $header.text()
      const antes = Number((texto.match(/\b\d+\b/) || ['0'])[0])

      cy.get('.btn-primary').eq(2).click()

      // valida que o número aumentou (pelo menos +1)
      cy.get('header').should(($h2) => {
        const textoDepois = $h2.text()
        const depois = Number((textoDepois.match(/\b\d+\b/) || ['0'])[0])
        expect(depois).to.be.greaterThan(antes)
      })
    })
  })

  it('Deve adicionar o livro do card índice 2 usando o título como validação', () => {
    cy.get('.card')
      .eq(2)
      .within(() => {
        cy.get('h5, .card-title, .title')
          .first()
          .invoke('text')
          .as('tituloLivro')
        cy.contains('Adicionar').click()
      })

    cy.get('@tituloLivro').then((titulo) => {
      cy.get('#global-alert-container')
        .should('be.visible')
        .and('contain', titulo.trim())
    })
  })

  it('Deve clicar no terceiro botão Adicionar a cesta ', () => {
    cy.get('.btn-primary').eq(4).click()
    cy.get('#global-alert-container').should('contain', 'A Metamorfose')
  })
  it('Deve adicionar "A Metamorfose" à cesta e mostrar alerta', () => {
    cy.contains('.card', 'A Metamorfose') // acha o card do livro pelo título
      .contains('Adicionar à Cesta') // acha o botão dentro do card
      .click()

    cy.get('#global-alert-container')
      .should('be.visible')
      .and('contain', 'A Metamorfose')
  })
  it('Deve clicar no nome do livro e direcionar para a tela do livro', () => {
    cy.contains('Dom Casmurro').click()
    cy.url().should('include', 'book-details')
    cy.get('#add-to-cart-btn').click()
    cy.get('#alert-container').should(
      'contain',
      'Livro adicionado à cesta com sucesso',
    )
  })
})
