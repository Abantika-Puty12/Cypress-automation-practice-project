export class homePage {

    weblocaters = { 
        Add_click: 'button.oxd-button--secondary',
        employee_name: 'input[placeholder="Type for hints..."]',
        username: 'input[placeholder="Username"]',
        password: 'input[placeholder="Password"]',
        confirm_password: 'input[placeholder="Confirm Password"]',
        save_button: 'button[type="submit"]'
    }

    // ✅ FIXED (already correct)
    clickAdminTab() {
        cy.contains('span', 'Admin')
          .should('be.visible')
          .click()
    }

    // ✅ FIXED (avoid multiple buttons)
    clickAddButton() {
        cy.contains('button', 'Add')
          .should('be.visible')
          .click()
    }

    // ✅ FIXED (dropdown index)
    selectUserRole() {
        cy.get('.oxd-select-text-input').eq(0).click()
        cy.contains('div', 'Admin').click()
    }

   enterEmployeeName(name) {
    cy.get(this.weblocaters.employee_name)
      .should('be.visible')
      .type(name)
    }

    // ✅ FIXED (second dropdown)
    selectStatus() {
        cy.get('.oxd-select-text-input').eq(1).click()
        cy.contains('div', 'Enabled').click()
    }

    enterUsername(username) {
        cy.get(this.weblocaters.username).type(username)
    }

    enterPassword(password) {
        cy.get(this.weblocaters.password).type(password)
    }

    enterConfirmPassword(password) {
        cy.get(this.weblocaters.confirm_password).type(password)
    }

    // ✅ FIXED (safer click)
    clickSaveButton() {
        cy.contains('button', 'Save')
          .should('be.visible')
          .click()
    }

}