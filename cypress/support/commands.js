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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("selectProduct", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.wrap($el).click();
    }
  });
});

Cypress.Commands.add("addProductToCart", (productName) => {
  // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
  //   if ($el.text() === productName) {
  //     cy.get(".productcart").eq(index).click();
  //     // cy.wrap($el).click();
  //   }
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text() === productName) {
      cy.log($el.text());
      cy.get(".productcart").eq(index).click({ force: true });
    }
  });
  // });
});

Cypress.Commands.add("navigateToSpecificCategory", (category) => {
  cy.visit("https://automationteststore.com/");
  cy.get("a[href*='product/category&path=']").contains(category).click();
});

Cypress.Commands.add(
  "fillDatatoContactUsForm",
  (userData, $selector, textMessage) => {
    cy.get('[name="first_name"]').type(Cypress.env("first_name"));
    cy.get('[name="last_name"]').type(userData.last_name);
    if (userData.email) {
      cy.get('[name="email"]').type(userData.email);
    }
    cy.get("textarea.feedback-input").type("Comment");
    cy.get('[type="submit"]').click();
    cy.get($selector).should("have.text", textMessage);
  }
);

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-file-upload";
