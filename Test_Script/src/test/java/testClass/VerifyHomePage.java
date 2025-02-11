package testClass;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import baseClass.BaseClass;
import pomClass.HomePage;


public class VerifyHomePage {
	
	WebDriver driver;
	HomePage hp;
	
	@BeforeClass
	public void beforeClassMethod() {
		driver=BaseClass.getDriver();
		//driver.get("");
	}
	
	@BeforeMethod
	public void beforeMethod() {
		hp = new HomePage(driver);
	}
	
	
	@Test
	public void verifyUserLogin() throws InterruptedException {
		hp.selectCategory();
		
	}
	
	
	@AfterMethod
	public void afterMethod() {
		
	}
	
	
	@AfterClass
	public void afterClassMethod() {
		driver.close();
		driver.quit();
	}

}
