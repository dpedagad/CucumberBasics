$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AmazonLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login Amazon website",
  "description": "",
  "id": "login-amazon-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Test the Login feature in Amazon Website"
    },
    {
      "line": 4,
      "value": "#"
    },
    {
      "line": 5,
      "value": "#Given Amazon Website is opened"
    },
    {
      "line": 6,
      "value": "#When Click on signin button"
    },
    {
      "line": 7,
      "value": "#Then Enter valid Username"
    },
    {
      "line": 8,
      "value": "#And Enter correct Password"
    },
    {
      "line": 9,
      "value": "#Then Click on Login button"
    },
    {
      "line": 10,
      "value": "#Then User is on home page"
    }
  ],
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-amazon-website;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Amazon Website is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Click on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Enter valid \"\u003cUsername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter correct \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User selects your wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-amazon-website;;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 25,
      "id": "login-amazon-website;;;1"
    },
    {
      "cells": [
        "deepak.pedhagada@gmail.com",
        "deepak9985"
      ],
      "line": 26,
      "id": "login-amazon-website;;;2"
    },
    {
      "cells": [
        "dpk@amazon.com",
        "dpk9985"
      ],
      "line": 27,
      "id": "login-amazon-website;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-amazon-website;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Amazon Website is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Click on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Enter valid \"deepak.pedhagada@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter correct \"deepak9985\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User selects your wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.flipkart_Website_is_opened()"
});
formatter.result({
  "duration": 8922375472,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.Click_on_signin_button()"
});
formatter.result({
  "duration": 1398270351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deepak.pedhagada@gmail.com",
      "offset": 13
    }
  ],
  "location": "StepDefinition.enter_valid_Username(String)"
});
formatter.result({
  "duration": 308179453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deepak9985",
      "offset": 15
    }
  ],
  "location": "StepDefinition.enter_correct_Password(String)"
});
formatter.result({
  "duration": 143660155,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_Login_button()"
});
formatter.result({
  "duration": 4092237657,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 17421105,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_your_wishlist()"
});
formatter.result({
  "duration": 331999047,
  "error_message": "org.openqa.selenium.NoSuchFrameException: No frame element found by name or id mainpanel\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DIN16002375\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:982)\r\n\tat stepDefinitions.StepDefinition.user_selects_your_wishlist(StepDefinition.java:53)\r\n\tat ✽.Then User selects your wishlist(AmazonLogin.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "",
  "id": "login-amazon-website;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Amazon Website is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Click on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Enter valid \"dpk@amazon.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter correct \"dpk9985\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User selects your wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.flipkart_Website_is_opened()"
});
formatter.result({
  "duration": 15098013782,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.Click_on_signin_button()"
});
formatter.result({
  "duration": 2610855111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dpk@amazon.com",
      "offset": 13
    }
  ],
  "location": "StepDefinition.enter_valid_Username(String)"
});
formatter.result({
  "duration": 203517209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dpk9985",
      "offset": 15
    }
  ],
  "location": "StepDefinition.enter_correct_Password(String)"
});
formatter.result({
  "duration": 144827915,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_Login_button()"
});
formatter.result({
  "duration": 6086922625,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 14041711,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.i]n\u003e but was:\u003c[Amazon Sign I]n\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.StepDefinition.user_is_on_home_page(StepDefinition.java:48)\r\n\tat ✽.Then User is on home page(AmazonLogin.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_selects_your_wishlist()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});