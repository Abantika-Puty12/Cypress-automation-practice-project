export class resisterPage {

    weblocaters = {

       email:'input[name="username"]',
       password:'input[name="password"]',
       registerbutton:'button[type="submit"]'

    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterEmail(Admin){
        cy.get(this.weblocaters.email).type(Admin)
    }

    enterPassword(admin123){
        cy.get(this.weblocaters.password).type(admin123)
    }

    clickRegisterButton(){
        cy.get(this.weblocaters.registerbutton).click()
    }

}