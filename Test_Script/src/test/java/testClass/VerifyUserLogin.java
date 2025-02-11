package testClass;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import baseClass.BaseClass;
import pomClass.SigninPage;

public class VerifyUserLogin {
	
	WebDriver driver;
	SigninPage sp;
	
	@BeforeClass
	public void beforeClassMethod() {
		driver=BaseClass.getDriver();
		//driver.get("");
	}
	
	@BeforeMethod
	public void beforeMethod() {
		sp = new SigninPage(driver);
	}
	
	
	@Test
	public void verifyUserLogin() throws InterruptedException {
		sp.enterUsername();
		Thread.sleep(1000);
		sp.enterPassword();
		Thread.sleep(1000);
		sp.enterSubmit();
		
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
