Feature: WebDriverUniversity Login Page

    Scenario: Login using valid credentials
        Given I access the WebDriverUniversity Login Portal page
        When I enter the username : webdriver
        And I enter the password : webdriver123
        And I click on login button
        Then I should see the following message: validation succeeded

