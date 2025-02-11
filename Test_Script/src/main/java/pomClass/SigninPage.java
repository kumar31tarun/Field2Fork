package pomClass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SigninPage {
	
	WebDriver driver;
	
	@FindBy(xpath = "//input[@placeholder='Email']")
	private WebElement username;
	
	@FindBy(xpath="//input[@type='password']")
	private WebElement password;
	
	@FindBy(xpath="//button[@type='submit']")
	private WebElement submit;
	
	public SigninPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver=driver;
	}
	
	public void enterUsername() {
		username.sendKeys("buyer1@example.com");
	}
	
	public void enterPassword() {
		password.sendKeys("hashedpassword");
	}
	
	public void enterSubmit() {
		submit.click();
	}
	
	

}
