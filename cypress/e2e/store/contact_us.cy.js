/// <reference types='Cypress' />

describe("Test Contact Us form in Store", () => {
  it("Should be able to submit a successful form", () => {
    cy.visit("https://automationteststore.com/");
    // cy.get(
    //   'a[href="https://automationteststore.com/index.php?rt=content/contact"]'
    // ).click();

    // cy.get("#ContactUsFrm_first_name").type("First Name");
    // cy.get("#ContactUsFrm_email").type("email@gmail.com");
    // cy.get("#ContactUsFrm_enquiry").type("commnet field");

    // cy.get('[id="ContactUsFrm_first_name"]').type("First Name1");
    // cy.get('[ id="ContactUsFrm_email"]').type("test123@gmail.com");
    // cy.get('[id="ContactUsFrm_enquiry"]').type("commend line");
    // cy.get("button[title='Submit']").click();

    cy.get("a[href$='contact']")
      .click()
      .then((link) => {
        cy.log(`Link: ${link.text()}`);
      });
    // $ - ends with
    // ^ - starts with
    // XPath selectors
    // cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.xpath("//input[@id = 'ContactUsFrm_first_name']").type(
      "First Name XPath"
    );
    cy.xpath("//input[@id = 'ContactUsFrm_first_name']").should(
      "have.attr",
      "name",
      "first_name"
    );
    cy.xpath("//input[@id = 'ContactUsFrm_email']").type(
      "EmailXPath@gmail.com"
    );
    cy.xpath("//input[@id = 'ContactUsFrm_email']").should(
      "have.attr",
      "name",
      "email"
    );
    cy.xpath("//textarea[@id = 'ContactUsFrm_enquiry']").type("Comment XPath");
    cy.xpath("//button[@title = 'Submit']").click();
    cy.url().should(
      "include",
      "https://automationteststore.com/index.php?rt=content/contact/success"
    );
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
