/// <reference types="cypress" />

describe("Iterate over elements", () => {
  it("Log information of all hair care products", () => {
    cy.navigateToSpecificCategory("Hair Care");

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });
  it("Add specific product to basket", () => {
    cy.navigateToSpecificCategory("Hair Care");
    cy.selectProduct("Curls to straight Shampoo");
  });
  it("Add another specific product to basket", () => {
    cy.navigateToSpecificCategory("Hair Care");
    cy.selectProduct("Pantene Pro-V Conditioner, Classic Care");
  });
});
