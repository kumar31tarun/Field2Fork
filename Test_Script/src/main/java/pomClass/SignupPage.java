package pomClass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignupPage {
	WebDriver driver;
	
	@FindBy(xpath = "//input[@placeholder='Username']")
	private WebElement username;
	
	@FindBy(xpath = "//input[@placeholder='Email']")
	private WebElement email;
	
	@FindBy(xpath="//input[@type='contact']")
	private WebElement contact;
	
	@FindBy(xpath="//input[@type='location']")
	private WebElement location;
	
	@FindBy(xpath="//input[@type='password']")
	private WebElement password;
	
	@FindBy(xpath="//button[@type='submit']")
	private WebElement submitBtn;
	
	public SignupPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver=driver;
	}
	
	public void enterUsername() {
		username.sendKeys("buyer1@example.com");
	}
	
	public void enterEmail()
	{
		email.sendKeys("buyer1@example.com");
	}
	public void enterContact()
	{
		contact.sendKeys("1234567891");
	}
	public void enterLocation()
	{
		location.sendKeys("Pune");
	}
	
	public void enterPassword() {
		password.sendKeys("hashedpassword");
	}
	
	public void enterSubmit() {
		submitBtn.click();
	}

}
