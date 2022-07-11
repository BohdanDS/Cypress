/// <reference types='Cypress' />

describe("Handle drop-down", () => {
  it("Handle dropDown", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
    cy.get("#dropdowm-menu-1").select("c#").should("have.value", "c#");
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng");
    cy.get("#dropdowm-menu-3")
      .select("javascript")
      .should("have.value", "javascript");
  });
});
