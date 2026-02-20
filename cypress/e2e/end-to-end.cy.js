/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'
import cadastroPage from '../support/pages/cadastro-page'
import loginPage from '../support/pages/login-page'

describe('Funcionalidade: Teste de ponta a ponta', () => {

beforeEach(() => {
 cadastroPage.visitarPaginaCadastro()
 
})

  it('Deve cadastrar e logar com o usuario recém-cadastrado', () => {
    let email = `funcJs-${Date.now()}-@numAleatorio.com`
    let nome = faker.person.fullName({sex: 'male'})
    let telefone = '542654868654556'
    let senha = 'teste123'

    cadastroPage.preencherCadastro(nome, email, telefone, senha, senha)
   
    loginPage.visitarPaginaLogin()
    loginPage.fazerLogin(email, senha)

    cy.url().should('include', 'dashboard')
    });
})
