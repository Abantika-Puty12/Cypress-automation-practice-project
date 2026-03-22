/// <reference types="Cypress" />

describe('My xpath Test Suite', () => {

    it('My xpath Test Case', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.xpath('//input[@name="username"]').type('Admin')

        cy.xpath('//input[@name="password"]').type('admin123')

        cy.xpath('//button[@type="submit"]').click()

        cy.xpath('//span[text()="Admin"]').click()

    })

})