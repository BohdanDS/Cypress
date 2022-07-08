/// <reference types='Cypress' />

describe("Verifying Cypress commands and jquerry", () => {
  it("Navigated to specific product page", () => {
    cy.visit("https://automationteststore.com/");
    const makeUpLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup");
    makeUpLink.click();
    const skinCare = cy
      .get("a[href*='product/category&path=']")
      .contains("Skincare");
    skinCare.click();
  });
  it("Visit category Page and check page title", () => {
    cy.visit("https://automationteststore.com");
    const makeUpLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup")
      .click();
    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log("Heder Text:" + headerText);
      expect(headerText).is.eq("Makeup");
    });
  });
  it("Visit Catalog Onliner", () => {
    const searchQuery = "Benefit Bella Bamba";
    cy.visit("https://automationteststore.com/");
    cy.get("input#filter_keyword").click().type(searchQuery);
    cy.get(".fa-search").click();
    cy.get(".bgnone")
      .invoke("text")
      .then(($pageTitle) => {
        expect($pageTitle).is.eq(searchQuery);
        cy.url().should("include", "product&product_id=52");
      });
  });
  it("Validate properties for Contact Page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    // Uses Cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");
  });
  it("Iterate over elements", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Skincare").click();
    cy.get(".fixed_wrapper .prdocutname").each(($element, index, $list) => {
      cy.log(`${$element.text()} has index: ${index}`);
    });
  });
  it("Iterate over elements and click by condition", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Skincare").click();
    cy.get(".fixed_wrapper .prdocutname").each(($element, index, $list) => {
      if ($element.text() === "Absolue Eye Precious Cells") {
        cy.wrap($element).click();
      } else {
        cy.log("Did not find element: Absolue Eye Precious Cells");
      }
    });
  });
  it("Get all product frow main page", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productsLenght");
    cy.get("@productsLenght").should("have.length", 16);
    cy.get("@productsLenght")
      .find(".productcart")
      .invoke("attr", "title")
      .should("eq", "Add to Cart");
  });
  // cy.get(".thumbnail").as("productThumbnail");
  // cy.get("@productThumbnail")
  //   .find(".oneprice")
  //   .each(($el, index, $list) => {
  //     cy.log($el.text());
  //   });
  // cy.get("@productThumbnail")
  //   .find(".pricenew")
  //   .each(($el, index, $list) => {
  //     cy.log($el.text());
  //   });
  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
    //     cy.log($el.text());
    // });
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");

    let itemsTotal = 0;
    cy.get("@itemPrice").then(($linkText) => {
      let nonSellItemsPrice = $linkText
        .split("$")
        .reduce((sum, itemPrice) => Number(sum) + Number(itemPrice));
      itemsTotal += nonSellItemsPrice;
      cy.log("Non sale price items total: " + nonSellItemsPrice);
    });
    cy.get("@saleItemPrice")
      .then(($linkText) => {
        let sellItemsPrice = $linkText
          .split("$")
          .reduce((sum, itemPrice) => Number(sum) + Number(itemPrice));
        itemsTotal += sellItemsPrice;
        cy.log("Sale price items total: " + sellItemsPrice);
        cy.log("Total price is: " + itemsTotal);
      })
      .then(() => {
        cy.log("Total price is: " + itemsTotal);
        expect(itemsTotal).to.eq(648.5);
      });
  });
});
