/// <reference types='Cypress' />

describe("Test Contact Us form via WebDriverIni", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
  });
  it("Empty Email field", () => {
    cy.fixture("userDetailsNoEmail").as("emptyEmailUserData");
    cy.get("@emptyEmailUserData").then((data) => {
      cy.fillDatatoContactUsForm(
        data,
        "body",
        "\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n"
      );
    });
  });
  it("Successful submition", () => {
    cy.fixture("example").as("data");
    cy.get("@data").then((data) => {
      cy.fillDatatoContactUsForm(data, "h1", "Thank You for your Message!");
    });
  });
});
