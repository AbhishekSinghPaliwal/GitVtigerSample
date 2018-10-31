$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Test Vtiger smoke scenario",
  "description": "",
  "id": "test-vtiger-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-vtiger-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-vtiger-smoke-scenario;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "test-vtiger-smoke-scenario;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin1",
        "admin1"
      ],
      "line": 11,
      "id": "test-vtiger-smoke-scenario;test-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin2",
        "admin2"
      ],
      "line": 12,
      "id": "test-vtiger-smoke-scenario;test-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 13,
      "id": "test-vtiger-smoke-scenario;test-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-vtiger-smoke-scenario;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"admin1\" and valid \"admin1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_and_start_application()"
});
formatter.result({
  "duration": 8155069463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin1",
      "offset": 15
    },
    {
      "val": "admin1",
      "offset": 34
    }
  ],
  "location": "SmokeTest.i_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 1905941970,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 32575,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 710748131,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-vtiger-smoke-scenario;test-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"admin2\" and valid \"admin2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_and_start_application()"
});
formatter.result({
  "duration": 5554384577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin2",
      "offset": 15
    },
    {
      "val": "admin2",
      "offset": 34
    }
  ],
  "location": "SmokeTest.i_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 1934660058,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 24989,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 551396123,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-vtiger-smoke-scenario;test-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"admin\" and valid \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_and_start_application()"
});
formatter.result({
  "duration": 5556193626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 15
    },
    {
      "val": "admin",
      "offset": 33
    }
  ],
  "location": "SmokeTest.i_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 4222685219,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 40161,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 720380177,
  "status": "passed"
});
});