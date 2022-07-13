describe("Upload file", () => {
  it("Check validation on uploading without file", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#file-upload").invoke("removeAttr", "target").click();
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.eq("You need to select a file to upload!");
    });
  });
  it("Check that file is uploaded", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#file-upload").invoke("removeAttr", "target").click();
    cy.fixture("laptop.png", "base64").then((fileContent) => {
      cy.get("#myFile").attachFile(
        {
          fileContent,
          fileName: "laptop.png",
          mimeType: "image/png",
        },
        {
          uploadType: "input",
        }
      );
    });
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.eq("Your file has now been uploaded!");
    });
  });
});
