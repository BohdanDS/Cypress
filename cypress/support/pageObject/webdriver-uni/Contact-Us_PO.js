class Contact_Us_PO {
  submit_Contact_Us_form(userData, $selector, textMessage) {
    cy.get('[name="first_name"]').type(Cypress.env("first_name"));
    cy.get('[name="last_name"]').type(userData.last_name);
    if (userData.email) {
      cy.get('[name="email"]').type(userData.email);
    }
    cy.get("textarea.feedback-input").type("Comment");
    cy.get('[type="submit"]').click();
    cy.get($selector).should("have.text", textMessage, { timeout: 60000 });
  }
}

export default Contact_Us_PO;
