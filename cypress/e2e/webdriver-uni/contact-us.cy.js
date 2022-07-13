/// <reference types='Cypress' />

describe("Test Contact Us form via WebDriverIni", () => {
  before(() => {
    cy.fixture("example").then((data) => {
      // this.data = data;
      globalThis.data = data;
    });
  });
  // it("Should be able to submit a successful form", () => {
  //   //cypress code
  //   // cy.visit("https://webdriveruniversity.com/");
  //   // cy.get("#contact-us").click({ force: true });
  //   cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
  //   cy.document().should("have.property", "charset").and("eq", "UTF-8");
  //   cy.title().should("include", "WebDriver | Contact Us");
  //   cy.get('[name="first_name"]').type("Bohdan");
  //   cy.get('[name="last_name"]').type("Peliutkevich");
  //   cy.get('[name="email"]').type("bohdan.peliutkevich@gmail.com");
  //   cy.get("textarea.feedback-input").type("Comment");
  //   cy.get('[type="submit"]').click();
  //   cy.get("h1").should("have.text", "Thank You for your Message!");
  //   cy.get("#fountainG");
  // });
  // it("Empty Email field", () => {
  //   //cypress code
  //   cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
  //   cy.get('[name="first_name"]').type("Negotive-Bohdan");
  //   cy.get('[name="last_name"]').type("Peliutkevich");
  //   // cy.get('[name="email"]').type("bohdan.peliutkevich@gmail.com");
  //   cy.get("textarea.feedback-input").type("Comment");
  //   cy.get('[type="submit"]').click();
  //   cy.get("body").contains("Error: all fields are required");
  //   cy.get("body").contains("Error: Invalid email address");
  // });
  it.only("Handling multiple tabs", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    cy.get("textarea.feedback-input").type("Comment");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
    cy.get("#fountainG");
  });
});
