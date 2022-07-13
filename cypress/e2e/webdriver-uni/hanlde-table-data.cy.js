/// <reference types="Cypress" />
describe("Handling data from WebdriverUni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("Calculate total age of  users", () => {
    let userDetail = [];
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        if (Number($el.text())) {
          userDetail.push(Number($el.text()));
        }
      })
      .then(() => {
        const count = userDetail.reduce((acc, val) => {
          return acc + val;
        });
        cy.log(`Total age count is : ${count}`);
        expect(count).to.eq(322);
      });
  });
  it("Calculate and assert user age based on last name", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Woods")) {
        cy.get($el.next);
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((age) => {
            const userAge = age.text();
            expect(userAge).to.eq("80");
          });
        // expect($el.next.text()).to.equal(80);
      }
    });
  });
});
