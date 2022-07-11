/// <reference types='Cypress' />

describe("Handle checkboxes", () => {
  it("Handle checkboxes", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
    cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");
    cy.get("#checkboxes > :nth-child(5) > input")
      .uncheck()
      .should("not.be.checked");
  });
  it("Check multiple checkboxes", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
    cy.get("input[type='checkbox']")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
