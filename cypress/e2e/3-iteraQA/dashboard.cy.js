import loginPage from "../../support/pages/loginPage"
const loginInputan = require('../../fixtures/login.json')

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Dashboard Itera QA', () => {
  beforeEach(() => {
    cy.visit('https://itera-qa.azurewebsites.net/Dashboard')
  })
  
  const LoginPage = new loginPage()

  it('Search on Dashboard by Registered Name', () => {
    cy.get(LoginPage.loginMenu).click()
    cy.get(LoginPage.username).type(loginInputan.valid_user)
    cy.get(LoginPage.password).type(loginInputan.valid_password).wait(30)
    cy.get(LoginPage.loginButton).click()
    cy.get('h1').should('contain.text', 'Dashboard')
    cy.get('#searching').click().clear()
    .type('Carla')
    cy.get('.container > div > form > .btn').click()
  })

  it.only('Search on Dashboard by Unegistered Name', () => {
    cy.get(LoginPage.loginMenu).click()
    cy.get(LoginPage.username).type(loginInputan.valid_user)
    cy.get(LoginPage.password).type(loginInputan.valid_password).wait(30)
    cy.get(LoginPage.loginButton).click()
    cy.get('h1').should('contain.text', 'Dashboard')
    cy.get('#searching').type('Carlaa')
    cy.get('.container > div > form > .btn').click()
    cy.get('td').should('contain.text', 'No Match')
  })


  
})