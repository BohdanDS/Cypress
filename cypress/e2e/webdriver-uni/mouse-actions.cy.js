/// <reference types='Cypress' />

describe("Handle Mouse Actions", () => {
  it("Scroll elements inot view", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
  });
  it("Drag and Drop elements ", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
    cy.get("#droppable").find("b").should("have.text", "Dropped!");
  });
  it("double click", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
    cy.get("#double-click").should(
      "have.css",
      "background-color",
      "rgb(254, 196, 45)"
    );
    cy.get("#double-click").trigger("dblclick");
    cy.get("#double-click").should(
      "have.css",
      "background-color",
      "rgb(147, 203, 90)"
    );
  });
  it("Mouse over click", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
    cy.get(".dropdown").contains("Hover Over Me First!").as("leftBlock");
    cy.get("@leftBlock").trigger("hover");
    cy.get("@leftBlock");
  });
  it.only("Mouse hold down test", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
    cy.get("#click-box").should("have.css", "background-color", "rgb(0, 0, 0)");
    cy.get("#click-box").should("contain.text", "Click and Hold!");
    cy.get("#click-box")
      .trigger("mousedown")
      .should("have.css", "background-color", "rgb(0, 255, 0)")
      .should("contain.text", "Well done! keep holding that click now.....");
    cy.get("#click-box")
      .trigger("mouseup")
      .should("have.css", "background-color", "rgb(255, 99, 71)")
      .should("contain.text", "Dont release me!!!");
    cy.get("#click-box")
      .trigger("mousedown")
      .should("have.css", "background-color", "rgb(0, 255, 0)")
      .should("contain.text", "Well done! keep holding that click now.....");
    cy.get("#click-box")
      .trigger("mouseup")
      .then(($el) => {
        expect($el).to.have.css("background-color", "rgb(255, 99, 71)");
        expect($el).to.have.text("Dont release me!!!");
      });
    //   .should("have.css", "background-color", "rgb(255, 99, 71)")
    //   .should("contain.text", "Dont release me!!!");
  });
});
