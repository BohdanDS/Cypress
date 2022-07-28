import {
  Before,
  Given,
  After,
  When,
  And,
  Then,
} from "cypress-cucumber-preprocessor/steps";

Given("I access the WebDriverUniversity Login Portal page", () => {
  cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html");
});

When("I enter the username : webdriver {word}", (userName) => {
  cy.get("#text").type(userName);
});
