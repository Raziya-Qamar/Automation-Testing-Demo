/// <reference types ="Cypress" />
describe('website', function(){
    it('login test', function () {
        cy.visit('https://issuer.validlog.io/sign-in')

        cy.url().should('include', '/sign-in')

        cy.get('input[type="email"]').type('issuer.admin@dispostable.com')

        cy.get('#password').type('issuer@Sample1479')

        cy.get('input[type="checkbox"]').click()

        cy.get('#btnSubmit').click()

        cy.get('div.add-odc-leftpane-content > ul.odc-left-pane-list  > :nth-child(3) > a').click()
        cy.get('a[href="/doc"]').click()
        cy.get('div.container').click()
        cy.get('#docs_name').type('MyDoc1')
        cy.get('#myInput').type('Sample')
        cy.get('#add').click()
        cy.get('#save').click()

    })  
})



