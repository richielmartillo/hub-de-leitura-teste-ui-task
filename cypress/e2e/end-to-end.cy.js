/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'

beforeEach(() => {
  cy.visit('register.html')
})

describe('Funcionalidade: Teste de ponta a ponta', () => {
  it('Deve cadastrar e logar com o usuario recém-cadastrado', () => {
    let email = `funcJs-${Date.now()}-@numAleatorio.com`
    let nome = faker.person.fullName({ sex: 'male' })
    cy.preencherCadastro(nome, email, '542654868654556', 'teste123', 'teste123')

    let senha = 'teste123'

    cy.login(email, senha)

    cy.url().should('include', 'dashboard')
  })
})
