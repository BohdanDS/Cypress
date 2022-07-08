/// <reference types='Cypress' />

describe("Validate webdriveruni navigation links", () => {
  it("Confirm links redirect to correct pages", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.url().should("include", "contactus");
    cy.go("back");
    cy.reload();
    cy.reload(true); //Reload page without cache
    cy.go("forward");
    cy.url().should("include", "contactus");
  });
  it("Validate login page", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#login-portal").invoke("removeAttr", "target").click();
    cy.url().should("include", "Login-Portal");
  });
});
