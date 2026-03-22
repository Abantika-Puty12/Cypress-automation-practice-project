// /// <reference types="Cypress" />

// describe('My Browser Control Test Suite', () => {
//     it('My Browser Control Test Case', () => {
//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//         cy.contains('Login').should('be.visible')
//         cy.go('back')
//         cy.go('forward')
//         cy.go(-1)
//         cy.go(1)
//         cy.get('input[name="username"]').type('Adminuhggbdsujyfgasbdyhjfv')
//         // cy.reload()

//     })

// })

describe('My Browser Control Test Suite', () => {

    it('My Browser Control Test Case', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.contains('Login').should('be.visible')

        cy.visit('https://example.cypress.io')

        cy.go('back')     // go back to OrangeHRM
        cy.go('forward')  // go forward to example site

        cy.go(-1)         // back
        cy.go(1)          // forward

    })

})