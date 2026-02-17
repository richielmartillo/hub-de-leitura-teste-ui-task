/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'
beforeEach(() => {
  cy.visit('register.html')
})

describe('', () => {
  it('Deve fazer cadastro com sucesso, usando função JS', () => {
    let email = `funcJs-${Date.now()}-@numAleatorio.com`

    cy.get('#name').type('Juanfri')
    cy.get('#email').type(email)
    cy.get('#phone').type('116865332568')
    cy.get('#password').type('456teste#$%¨*#GGER#S')
    cy.get('#confirm-password').type('456teste#$%¨*#GGER#S')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()

    //resultado esperado

    cy.url().should('include', 'dashboard')
  })

  it('Deve fazer cadastro com sucesso, usando Faker ', () => {
    let email = faker.internet.email()
    let nome = faker.person.fullName()
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type('116865332568')
    cy.get('#password').type('456teste#$%¨*#GGER#S')
    cy.get('#confirm-password').type('456teste#$%¨*#GGER#S')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()

    //resultado esperado

    cy.url().should('include', 'dashboard')
    cy.get('#user-name').should('contain', nome)
  })
})
