/// <reference types="Cypress" />

describe('My Hook Implementation Test Suite', () => {
    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        
    })

    it('My Second Test Case Username', () => {
        cy.contains('Admin').click()
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type('Admin')
        cy.get('button[type="submit"]').click()
    })

     it('My Second Test Case Employee Name', () => {
        cy.contains('Admin').click()
        cy.get('input[placeholder="Type for hints..."]').type('Chenzira Chuki')
        cy.get('button[type="submit"]').click()
    })

    afterEach(() => {
        cy.get('.oxd-userdropdown-name').click()
        cy.contains('Logout').click()
    });


});