Feature: Homepage exists and Ajax loads properly

    Scenario: The main page exists
        When I go to "/"
        Then I should see "silex microsite template"

    Scenario: Ajax content is loaded and displayed
        When I go to "/"
        Then I should see "hello world"

    Scenario: Links and routes are working
        When I go to "/"
         And I follow "another page"
        Then I should be on "/another/page"
         And I should see "page2"