import { homePage } from "../../pages/homePage";
const homeObj = new homePage()
import homepage from '../../fixtures/homepage.json'


describe('Add Admin Test', () => {
    before(() => {
        cy.login(homepage.login.email, homepage.login.password)

    })

    it('Add Admin', () => {

        homeObj.clickAdminTab()
        homeObj.clickAddButton()
        homeObj.selectUserRole('Admin')
        homeObj.enterEmployeeName('Odis Adalwin')
        homeObj.enterUsername('odisalwin')
        homeObj.selectStatus('Enabled')
        homeObj.enterPassword('odisalwin123')
        homeObj.enterConfirmPassword('odisalwin123')
        homeObj.clickSaveButton()

    })

})