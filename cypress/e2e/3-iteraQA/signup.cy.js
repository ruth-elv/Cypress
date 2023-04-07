import signupPage from "../../support/pages/signupPage"
const signupInputan = require('../../fixtures/signup.json')

describe('Sign Up Itera QA', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
  })

  const SignupPage = new signupPage()
  
  it('Failed to Sign Up - Not Filled Each Field', () => {
    cy.get(SignupPage.signup).click()
    cy.get(SignupPage.firstName)
    cy.get(SignupPage.surName)
    cy.get(SignupPage.epost)
    cy.get(SignupPage.mobile)
    cy.get(SignupPage.username)
    cy.get(SignupPage.password)
    cy.get(SignupPage.confirm)
    cy.get(SignupPage.buttonSubmit).click()
    cy.get('#FirstName-error').contains("Please enter first name").should('be.visible')
  })

  it('Success to Sign Up', () => {
    cy.get(SignupPage.signup).click()
    cy.get(SignupPage.firstName).type(signupInputan.first_name)
    cy.get(SignupPage.surName).type(signupInputan.sur_name)
    cy.get(SignupPage.epost).type(signupInputan.epost)
    cy.get(SignupPage.mobile).type(signupInputan.mobile)
    cy.get(SignupPage.username).type(signupInputan.username)
    cy.get(SignupPage.password).type(signupInputan.password)
    cy.get(SignupPage.confirm).type(signupInputan.confirm_password)
    cy.get(SignupPage.buttonSubmit).click()
    .wait(10)
    cy.get('#submit').click()
    cy.get('.label-success')
    
  })
})