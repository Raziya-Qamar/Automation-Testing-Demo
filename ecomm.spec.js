/// <reference types ="Cypress" />



describe('Ecom website', function(){
    it('Contact to sites', () =>{
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('#recipient-email').type('sneha@gmail.com');
        cy.get('#recipient-name').type('Sneha');
        cy.get('#message-text').type('Just for quries');
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(4000);
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
        cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click();
        cy.get('.active > .nav-link').click();
        
       

    })
    it('laptops categories', () =>{
        cy.contains('Laptops').click();
    })
})
