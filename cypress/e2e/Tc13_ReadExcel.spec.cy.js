/// <reference types="Cypress" />

describe('Excel test', () => {

    beforeEach(function () {
        cy.task('readXlsx', {
            file: 'cypress/fixtures/conduitexceldata.xlsx',
            sheet: 'Sheet1'
        }).then((rows) => {
              // ✅ store properly
        });
    });

    it('valid credentials', function () {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type(data[0].username)
        cy.get('input[name="password"]').type(data[0].password)

        cy.get('button[type="submit"]').click()

        cy.get('.oxd-main-menu-item').contains('Admin').click()
    });

    it('invalid credentials', function () {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type(data[1].username)
        cy.get('input[name="password"]').type(data[1].password)

        cy.get('button[type="submit"]').click()
    });

});