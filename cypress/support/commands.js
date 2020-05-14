// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("createUser", () =>{
    cy.request({
        method:'POST',
        url: '',
        body:{
            name: "Vinicius",
            studentid: "2017256",
            email: "vinicius@cct.ie",
            password: "Pass123!",
            passwordconfirmation: "Pass123!",

        }

    }).then(response =>{
        expect(xhr.response.body.email).is.not.null;
        cy.log(response.body.email);
        expect(xhr.response.body.password).is.not.null;
        cy.log(responde.body.password);

        Cypress.env('createUserEmail', response.body.email);
        Cypress.env('createUserPassword', response.body.password);
    }); 


})