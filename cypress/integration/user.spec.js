/// <reference types="cypress" />

describe('user', ()=>{
    it('Register a new User', ()=>{
        //cy.visit('http://localhost:4200/register');
        // cy.get - get a element
        // .type - insert a text
        cy.get('[data-cy=name]').type('Vinicius');
        cy.get('[data-cy=studentid]').type('2017256');
        cy.get('[data-cy=email]').type('vinicius@cct.ie');
        cy.get('[data-cy=password]').type('Pass123!');
        cy.get('[data-cy=passwordconfirmation]').type('Pass123!');

        // routing
        //start server with cy.server()
        //create a route with cy.rout()
        //assigning a route to a alias
        // wait until the call is successful with cy.wait

        cy.route('POST', '**/user').as('postUser');

        cy.get('[data-cy=submit]').click();

        cy.wait('@postUser').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('email');
            expect(xhr.response.body).has.property('password');
            expect(xhr.response.body.email).is.not.null;
            expect(xhr.response.body.password).is.not.null;
        })

    });

    it('user can Login to the web application', () => {
        cy.visit('http://Localhost:9898798/');
        cy.get('email').type(Cypress.env('createUserEmail'));// email on the login page
        cy.get('password').type(Cypress.env('createUserPassword'));// password on the login page
        cy.get('.button').click(); // submit button to login
    });
});