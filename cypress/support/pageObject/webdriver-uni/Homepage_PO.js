class HomePage_PO {
  visitHomeePage_PO() {
    cy.visit(Cypress.env("webdriverunivHomePage"));
  }
  clickOn_specificLink(identifier) {
    cy.get(identifier).invoke("removeAttr", "target").click();
  }
}

export default HomePage_PO;
