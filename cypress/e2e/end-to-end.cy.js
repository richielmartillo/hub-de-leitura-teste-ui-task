/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'
import cadastroPage from '../support/pages/cadastro-page'
import loginPage from '../support/pages/login-page'

describe('Funcionalidade: Teste de ponta a ponta', () => {

beforeEach(() => {
 cadastroPage.visitarPaginaCadastro()
 
})

  it('Deve cadastrar e logar com o usuario recém-cadastrado', () => {
    const email = `funcJs-${Date.now()}-@numAleatorio.com`
    const nome = faker.person.fullName({sex: 'male'})
    const telefone = '542654868654556'
    const senha = 'teste123'

    cadastroPage.preencherCadastro(nome, email, telefone, senha, senha)
   
    loginPage.visitarPaginaLogin()
    loginPage.fazerLogin(email, senha)

    cy.url().should('include', 'dashboard')
    });
})
