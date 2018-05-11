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
  "name": "Scroll to an element",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 22,
      "value": "#Then Close the browser"
    }
  ],
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-amazon-website;;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 26,
      "id": "login-amazon-website;;;1"
    },
    {
      "cells": [
        "deepak.pedhagada@gmail.com",
        "deepak9985"
      ],
      "line": 27,
      "id": "login-amazon-website;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
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
  "name": "Scroll to an element",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.flipkart_Website_is_opened()"
});
formatter.result({
  "duration": 18355824506,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.Click_on_signin_button()"
});
formatter.result({
  "duration": 3851443024,
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
  "duration": 467102225,
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
  "duration": 210644357,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_Login_button()"
});
formatter.result({
  "duration": 7302505223,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 53468460,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_your_wishlist()"
});
formatter.result({
  "duration": 6311816516,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.Scroll_to_an_element()"
});
formatter.result({
  "duration": 72934061,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: arguments[0].scrollIntloView is not a function\n  (Session info: chrome\u003d66.0.3359.139)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DIN16002375\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\dpedagad\\AppData\\Local\\Temp\\scoped_dir16244_567}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d66.0.3359.139, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a23f0af205a37244032f89ac17f0b2c8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:582)\r\n\tat stepDefinitions.StepDefinition.Scroll_to_an_element(StepDefinition.java:69)\r\n\tat ✽.Then Scroll to an element(AmazonLogin.feature:21)\r\n",
  "status": "failed"
});
});