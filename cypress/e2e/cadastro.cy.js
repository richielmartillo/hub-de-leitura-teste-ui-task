/// <reference types="cypress"/>

beforeEach(() => {
    cy.visit('register.html')
});

describe('', () => {
    it('Deve fazer cadastro com sucesso', () => {
        cy.get('#name').type('Juanfri')
        cy.get('#email').type('juanfri0@gmail.com')
        cy.get('#phone').type('116865332568')
        cy.get('#password').type('456teste#$%¨*#GGER#S')
        cy.get('#confirm-password').type('456teste#$%¨*#GGER#S')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
   

        cy.url().should('include', 'dashboard')
    });
});