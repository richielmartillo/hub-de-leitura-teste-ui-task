/// <reference types="cypress"/>

describe('Funcionalidade Contato', () => {
  it.only('Deve preencher formulário de contato com sucesso', () => {
    cy.visit('http://localhost:3000/index.html')
  cy.get('[name="name"]').type('Richard Marlon Balestrim')
  cy.get('[name="email"]').type('jackswalou@gmail.com')
  cy.get('[name="subject"]').select('Sugestões')
  cy.get('[name="message"]').type( 'Mensnagem de teste')
  cy.get('#btn-submit').click()
  cy.contains('Contato enviado com sucesso!').should('exist')
  })

  it('Teste 1', () => {})

  it('Teste 2', () => {})

  it('Teste 3', () => {})

  it('Teste 4', () => {})
})
