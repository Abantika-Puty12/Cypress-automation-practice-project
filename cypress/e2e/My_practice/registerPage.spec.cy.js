import { resisterPage } from "../../pages/resisterPage";
const resisterObj = new resisterPage()
import conduitLoginData from '../../fixtures/conduitLoginData.json'

describe('Register Page Tests', () => {



    it('register a new user successfully', () => {

        resisterObj.openURL()
        resisterObj.enterEmail(conduitLoginData.validEmail)
        resisterObj.enterPassword(conduitLoginData.validPassword)
        resisterObj.clickRegisterButton()




    })



})