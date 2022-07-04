/// <reference types ="Cypress" />

describe('simple login webpage',() =>{
it('login test', ()=>{

    cy.visit('https://www.stealmylogin.com/demo.html');
    cy.get('[type="text"]').type('neha');
    cy.get('[type="password"]').type('sh123');
    cy.get('[type="submit"]').click();

 })
})