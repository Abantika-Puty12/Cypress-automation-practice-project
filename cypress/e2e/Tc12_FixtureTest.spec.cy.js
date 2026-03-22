/// <reference types="Cypress" />

describe('valid credentials', () => {
      
    beforeEach(function() {
        cy.fixture('conduitLoginData').as('data') 
    })

    it('valid credentials', function() {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type(this.data.validEmail)
        cy.get('input[name="password"]').type(this.data.validPassword)

        cy.get('button[type="submit"]').click()

        cy.get('.oxd-main-menu-item').contains('Admin').click()

    })

    it('invalid credentials', function() {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type(this.data.invalidEmail)
        cy.get('input[name="password"]').type(this.data.invalidPassword)

        cy.get('button[type="submit"]').click()

    })

})