/// <reference types='Cypress' />

describe("Handle radioButtons", () => {
  it("Handle radioButtons", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();

    cy.get("#radio-buttons").find("[type='radio']").last().check();
    cy.get("#radio-buttons").find("[type='radio']").eq(1).check();
  });
  it("Handle state of radioButtons", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();

    //   cy.get("#radio-buttons-selected-disabled").
    cy.get("[value = 'lettuce']").should("not.be.checked");
    cy.get("[value = 'cabbage']").should("be.disabled");
    cy.get("[value = 'pumpkin']").should("be.checked");
  });
});
