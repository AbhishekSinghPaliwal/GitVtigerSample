package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="features",
		glue={"stepDefinition"},
		plugin={"html:target/cucumber-html-report"}
        )
public class TestRunner {

//Git Bash commit 1
//Git Bash commit 2
//Git Bash commit 3
}
