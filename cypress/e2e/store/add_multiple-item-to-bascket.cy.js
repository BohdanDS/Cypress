/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".productcart").eq(1).click({ force: true });
  });
  it("Add specific items to basket", () => {
    globalThis.data.productName.forEach(function (element) {
      cy.addProductToCart(element);
    });
    cy.get(".dropdown-toggle > .fa").click();
  });
});
