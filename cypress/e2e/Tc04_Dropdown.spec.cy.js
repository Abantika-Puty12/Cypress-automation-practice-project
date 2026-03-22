

describe('Dropdown', () =>{
    it('Handling static dropdown', () =>{
       cy.visit('https://seleniumbase.io/demo_page')
       cy.get('#mySelect').select('Set to 100%').should('have.value', '100%')


    })


    it('Handling dynamic dropdown', () =>{
        cy.visit('https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx')
        cy.get('#ctl00_ContentPlaceholder1_RadDropDownProducts').click()
        cy.get('.rddlItem').contains("Sir Rodney's Scones").click()

    })

    it('Handling multiple dropdown', () => {

    cy.visit('https://demo.mobiscroll.com/jquery/select/multiple-select')
    cy.get('#multiple-select-input').click({force:true})
    cy.contains('.mbsc-scroller-wheel-item', 'Electronics & Computers').click()
    cy.contains('.mbsc-scroller-wheel-item', 'Movies, Music & Games').click()

})
})