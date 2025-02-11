package pomClass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage 
{
    WebDriver driver;
	
	@FindBy(xpath = "//div[@class='absolute insert-0 bg-graient-2-t']")
	private WebElement category;
	
	public HomePage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver=driver;
	}
	
	public void selectCategory() {
		category.click();
	}
	

}
