/// <reference types='Cypress' />

describe("Inspect Items using chaining commands", () => {
  it("Click on the first Item by using Name", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then((itemHeaderText) => {
        console.log(`Selected item: ${itemHeaderText.text()}`);
      });
    // cy.xpath("//a[@title='Skinsheen Bronzer Stick']").click();
  });
  it("Click on the first Item by index", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
});
