describe("Upload file", () => {
  it("Check validation on uploading without file", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#file-upload").invoke("removeAttr", "target").click();
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.eq("You need to select a file to upload!");
    });
  });
});
