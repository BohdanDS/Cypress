/// <reference types='Cypress' />

describe("Handle Browser alerts", () => {
  it("Handle JS alerts and validate text", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.eq("I am an alert box!");
    });
  });
  it("Handle JS alert with confirmation", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button4").click();
    cy.on("window:confirm", (str) => {
      return true;
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });
  it("Handle JS alert with declining", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button4").click();

    cy.on("window:confirm", () => {
      return false;
    });

    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });
  it("Handle JS alert with stubs()", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();

    const stub = cy.stub();
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK!");
      });
  });
});
