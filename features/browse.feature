Feature: Homepage exists and Ajax loads properly

    Scenario: I can browse
        When I go to "/"
        Then I should see "silex microsite template"
         And I should see "hello world"