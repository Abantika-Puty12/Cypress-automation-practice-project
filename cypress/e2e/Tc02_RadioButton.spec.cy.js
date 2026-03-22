

describe('Radio button', () =>{
    it('Verify the radio button', () =>{
        //basic radio button handle
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/')
        cy.get('#radio-choice-0a').should('not.be.checked').click({force:true})
        cy.get('#radio-choice-0b').should('not.be.checked').click({force:true})

    })

    it('Verify the radio button', () =>{
        //modern radio button handle
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/')
        cy.get('#radio-choice-h-2b').should('not.be.checked').click({force:true})
        cy.get('#radio-choice-t-6c').should('not.be.checked').click({force:true})

    })


})