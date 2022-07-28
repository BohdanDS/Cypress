/// <reference types='Cypress' />

describe("Test JSON", () => {
  it("JSON Example1", () => {
    const exampleJSON = {
      key: "Bodhan",
      anotherKey: "Max",
      otherKey: "Alex",
    };
    cy.log(exampleJSON.key);
    cy.log(exampleJSON["anotherKey"]);
  });
});
