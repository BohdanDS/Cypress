import HomePage_PO from "../../support/pageObject/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObject/webdriver-uni/Contact-Us_PO";
/// <reference types='Cypress' />

describe("Test Contact Us form via WebDriverIni", () => {
  Cypress.config("defaultCommandTimeout", 20000);
  const contactPage = new Contact_Us_PO();
  const homePage = new HomePage_PO();
  beforeEach(() => {
    // cy.visit(
    //   `${Cypress.env("webdriverunivHomePage")}/Contact-Us/contactus.html`
    // );
    homePage.visitHomeePage_PO();
    homePage.clickOn_specificLink("#contact-us");
  });
  it("Empty Email field", () => {
    cy.fixture("userDetailsNoEmail").as("emptyEmailUserData");
    cy.get("@emptyEmailUserData").then((data) => {
      contactPage.submit_Contact_Us_form(
        data,
        "body",
        "\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n"
      );
      // cy.fillDatatoContactUsForm(
      //   data,
      //   "body",
      //   "\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n"
      // );
    });
  });
  it("Successful submition", () => {
    cy.fixture("example").as("data");
    cy.get("@data").then((data) => {
      contactPage.submit_Contact_Us_form(
        data,
        "h1",
        "Thank You for your Message!"
      );
      // cy.fillDatatoContactUsForm(data, "h1", "Thank You for your Message!");
    });
  });
});
