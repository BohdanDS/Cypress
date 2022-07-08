/// <reference types='Cypress' />

describe("Cypress web-security", () => {
  it("Validate visiting two different super domains", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.visit("https://automationteststore.com/");
  });

  it("Validate sub-domain visit", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });
});
