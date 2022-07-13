/// <reference types="Cypress" />
describe("Handle Date Picker", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
  });
});
