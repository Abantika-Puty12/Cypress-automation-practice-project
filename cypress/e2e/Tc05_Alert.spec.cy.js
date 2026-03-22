describe('Alert Handling', () => {

    it('Simple Handling alert', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })

        cy.contains('Click for JS Alert').click()

        cy.get('#result').should('contain','You successfully clicked an alert')

    })


    it('Confirmation alert - OK button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
        })

        cy.contains('Click for JS Confirm').click()

        cy.get('#result').should('contain','You clicked: Ok')

    })


    it('Confirmation alert - Cancel button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
            return false     // Cancel button
        })

        cy.contains('Click for JS Confirm').click()

        cy.get('#result').should('contain','You clicked: Cancel')

    })


    it('Prompt alert', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Cypress Alert')
        })

        cy.contains('Click for JS Prompt').click()

        cy.get('#result').should('contain','You entered: Cypress Alert')

    })

})