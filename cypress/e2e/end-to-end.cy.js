/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'


Cypress.Commands.add('abrirHome', () => cy.visit('/index.html'))

Cypress.Commands.add('abrirCadastro', () => {
  cy.abrirHome()
  cy.contains('Criar Conta Grátis').click()
})


Cypress.Commands.add('preencherCadastro', ({ nome, email, senha }) => {
  cy.get('input').then(($inputs) => {
    const all = [...$inputs]

    const inputNome =
      all.find(i => (i.placeholder || '').toLowerCase().includes('nome')) ||
      all.find(i => (i.name || '').toLowerCase().includes('nome')) ||
      all.find(i => i.type === 'text')
    if (inputNome) cy.wrap(inputNome).clear().type(nome)

    const inputEmail =
      all.find(i => i.type === 'email') ||
      all.find(i => (i.placeholder || '').toLowerCase().includes('email')) ||
      all.find(i => (i.name || '').toLowerCase().includes('email')) ||
      all.find(i => (i.id || '').toLowerCase().includes('email'))
    if (inputEmail) cy.wrap(inputEmail).clear().type(email)

    const passwords = all.filter(i => i.type === 'password')
    if (passwords[0]) cy.wrap(passwords[0]).clear().type(senha)
    if (passwords[1]) cy.wrap(passwords[1]).clear().type(senha)
  })
})

Cypress.Commands.add('enviarCadastro', () => {
  cy.contains('button, a', /criar|cadastrar|registrar|salvar|continuar/i).click()
})

Cypress.Commands.add('abrirLogin', () => cy.visit('/login.html'))

Cypress.Commands.add('logarContaQA', (email, senha) => {
  cy.get('#email, input[type="email"]').first().clear().type(email, { log: false })
  cy.get('#password, input[type="password"]').first().clear().type(senha, { log: false })
  cy.get('#login-btn, button[type="submit"]').first().click()
})

describe('Testes End To End do fluxo de cadastro e login', () => {
  it('deve realizar cadastro (faker) e login (conta QA) com sucesso', () => {
   
    const novoUsuario = {
      nome: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      senha: faker.internet.password({ length: 10 }),
    }

    cy.abrirCadastro()
    cy.preencherCadastro(novoUsuario)
    cy.enviarCadastro()
    cy.url().should('include', '.html')

   
    cy.abrirLogin()
    cy.logarContaQA('admin@biblioteca.com', 'admin123')
    cy.url().should('include', 'admin-dashboard.html')
  })
})

