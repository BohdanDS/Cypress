/// <reference types='Cypress' />

describe("Auto-complete dropdown", () => {
  it("Validate autocompletion with A symbol", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();
    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const product = $el.text();
        const productToSelect = "Avacado";
        if (product === productToSelect) {
          //   cy.wrap($el).click();
          $el.trigger("click");
          cy.get("#submit-button").click();
          cy.url().should("include", productToSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("G");
        cy.get("#myInputautocomplete-list > * ").each(($el, index, $list) => {
          const product = $el.text();
          const productToSelect = "Garlic";
          if (product === productToSelect) {
            cy.wrap($el).click();
            cy.get("#submit-button").click();
            cy.url().should("include", productToSelect);
          }
        });
      });
  });
});
