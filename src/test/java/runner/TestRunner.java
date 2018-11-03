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
<<<<<<< HEAD
//Git Basch comment at 31oct18
=======
//Git eclipse commit 4
//Git eclipse commit 5
//Git eclipse commit 6
//Git eclipse commit 7
>>>>>>> e10bdf13ce677f1587d062110791168ecf93abad
}
