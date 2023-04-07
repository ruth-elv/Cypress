import loginPage from "../../support/pages/loginPage"
const loginInputan = require('../../fixtures/login.json')

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Sign Up Itera QA', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
  })
  
  const LoginPage = new loginPage()
  
  it('Success to Login', () => {
    cy.get(LoginPage.loginMenu).click()
    cy.get(LoginPage.username).type(loginInputan.valid_user)
    cy.get(LoginPage.password).type(loginInputan.valid_password)
    cy.get(LoginPage.loginButton).click()
  })

  it('Click the "Clear" button', () => {
    cy.get(LoginPage.loginMenu).click()
    cy.get(LoginPage.username).type(loginInputan.valid_user)
    cy.get(LoginPage.password).type(loginInputan.valid_password)
    cy.get(LoginPage.clearButton).click()
  })

  it('Failed to Login - Skip to filled the field and directly click the "Login" button', () => {
    cy.get(LoginPage.loginMenu).click()
    cy.get(LoginPage.username)
    cy.get(LoginPage.password)
    cy.get(LoginPage.loginButton).click()
    cy.get(LoginPage.alert)
  })

  it('Success to Logout', () => {
    cy.get(LoginPage.loginMenu).click()
    cy.get(LoginPage.username).type(loginInputan.valid_user)
    cy.get(LoginPage.password).type(loginInputan.valid_password)
    cy.get(LoginPage.loginButton).click()
    cy.get('h1').should('contain.text', 'Dashboard')
    cy.get(LoginPage.loginMenu).click()
    
  })
  
})