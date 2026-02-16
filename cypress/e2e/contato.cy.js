/// <reference types="cypress"/>

beforeEach(() => {
    cy.visit('index.html')
  
});

describe('Funcionalidade Contato', () => {
  it('Deve preencher formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Richard Marlon Balestrim')
    cy.get('[name="email"]').type('jackswalou@gmail.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type( 'Mensnagem de teste')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!').should('exist')
  })

  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {
    
    cy.get('[name="email"]').type('jackswalou@gmail.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type( 'Mensnagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')


  })

  it('Deve validar mensagem de erro ao enviar sem preencher email', () => {
    cy.get('[name="name"]').type('Richard Marlon Balestrim')
    
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type( 'Mensnagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail')

  })

  it('Deve validar mensagem de erro ao enviar sem selecionar o assunto', () => {
    cy.get('[name="name"]').type('Richard Marlon Balestrim')
     cy.get('[name="email"]').type('jackswalou@gmail.com')
    cy.get('[name="subject"]').clear
    cy.get('[name="message"]').type( 'Mensnagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto')
  })

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => { 
    cy.get('[name="name"]').type('Richard Marlon Balestrim')
    cy.get('[name="email"]').type('jackswalou@gmail.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').clear
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem')


  })
})
