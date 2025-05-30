package testClass;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import baseClass.BaseClass;
import pomClass.SignupPage;

public class VerifyUserSignup {
		
		WebDriver driver;
		SignupPage su;
		
		@BeforeClass
		public void beforeClassMethod() {
			driver=BaseClass.getDriver();
			//driver.get("");
		}
		
		@BeforeMethod
		public void beforeMethod() {
			su = new SignupPage(driver);
		}
		
		
		@Test
		public void verifyUserLogin() throws InterruptedException {
			su.enterUsername();
			su.enterEmail();
			su.enterContact();
			su.enterLocation();
			su.enterPassword();
			su.enterSubmit();
			
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
