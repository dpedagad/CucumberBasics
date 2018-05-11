package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDefinition {
	WebDriver driver;
	
	@Given("^Amazon Website is opened$")
	public void flipkart_Website_is_opened() {
	   System.setProperty("webdriver.chrome.driver", "D:/Automation/chromedriver_win32/chromedriver.exe");
	   driver = new ChromeDriver();
	   driver.get("https://www.amazon.in/");
	   driver.manage().window().maximize();
	}
	
	@When("^Click on signin button$")
	public void Click_on_signin_button() {
	    driver.findElement(By.xpath("//*[@id='nav-link-yourAccount']/span[1]")).click();
	}

	@Then("^Enter valid \"(.*)\"$")
	public void enter_valid_Username(String Username) {
	    driver.findElement(By.xpath("//*[@id='ap_email']")).sendKeys(Username);
	  
	}

	@Then("^Enter correct \"(.*)\"$")
	public void enter_correct_Password(String Password) {
		 driver.findElement(By.xpath("//*[@id='ap_password']")).sendKeys(Password);
	}

	@Then("^Click on Login button$")
	public void click_on_Login_button() {
	driver.findElement(By.xpath("//*[@id='signInSubmit']")).click();
	}
	
	@Then("^User is on home page$")
	public void user_is_on_home_page() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in", title);
	}
	
	@Then("^User selects your wishlist$")
	public void user_selects_your_wishlist() throws InterruptedException {
	  WebElement element = driver.findElement(By.xpath("//*[@id='nav-link-yourAccount']/span[2]"));
	  WebElement Wishlist = driver.findElement(By.xpath("//*[@id='nav-flyout-yourAccount']/div[2]/a[3]/span"));
	    Actions hover = new Actions(driver);
	    
	    hover.moveToElement(element).build().perform();
	    Thread.sleep(3000);
	    Wishlist.click();
	   // driver.findElement(By.xpath("//*[@id='nav-flyout-yourAccount']/div[2]/a[3]/span)")).click();
	}
	
	@Then("^Scroll to an element$")
	public void Scroll_to_an_element() throws InterruptedException {
	  WebElement item = driver.findElement(By.xpath("//*[@id='itemName_I4LK1GT914KH5']"));
	  ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntloView(false);", item);
	  Thread.sleep(5000);
	item.click();
	}
	
//	@Then("^Close the browser$")
//	public void close_the_browser() {
//	driver.quit();   
//	
//	}
}
