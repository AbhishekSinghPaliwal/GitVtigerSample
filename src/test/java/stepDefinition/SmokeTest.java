package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest 
{
	//2nd commit by eclipse
	//3rd commit by eclipse
	//3rd commit by eclipse for SmokeTest file
	//4th commit by eclipse for SmokeTest file
	//5th commit by eclipse for SmokeTest file
	//6th commit by eclipse for SmokeTest file
	//7th commit by eclipse for SmokeTest file
	WebDriver driver;
	@Given("^Open firefox and start application$")
	public void open_firefox_and_start_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver=new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("http://localhost:81/");
		System.out.println("Browser launched, commit2");
	   
	}

	@When("^I enter valid \"(.*?)\" and valid \"(.*?)\"$")
	public void i_enter_valid_username_and_valid_password(String uname, String upass) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@name='user_name']")).sendKeys(uname);
		driver.findElement(By.xpath("//input[@name='user_password']")).sendKeys(upass);
		driver.findElement(By.xpath("//input[@name='Login']")).click();
	   
	}

	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^application should be closed$")
	public void application_should_be_closed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   driver.quit();
	}


}
