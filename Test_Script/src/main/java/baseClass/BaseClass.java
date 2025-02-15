package baseClass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	
	static WebDriver driver;
	
	public static WebDriver getDriver() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("http://localhost:5173/login");
		driver.get("http://localhost:5173/signup/seller");
		driver.get("http://localhost:5173");
		driver.get("http://localhost:5173/category");
		driver.get("http://localhost:5173/category/GRAINS%20PULSES");
		
		return driver;
	}
	
	

}
