
const {Builder, By, Key} = require('selenium-webdriver');
var driver = new Builder().forBrowser("chrome").build();
const url = "https://www.amazon.com";
const selectors = {
     searchBox: '#twotabsearchtextbox',
};

class SearchPage {
  constructor(driver) {
    this.driver = driver
  }
      // open URL
  async navigateToAmazon() {
    await this.driver.get(url);
  }
     // Find a search field and enter search Product
  async searchProduct() {
      await this.driver.type(selectors.searchBox,'Coffee').sendKeys(Key.RETURN);

     // Confirm expected product found
      TextElement SearchWord = driver.findElement(By.css('//span[2]/div/h1/div/div[1]/div/div/span[3]'));
      String ExpectedText = “Coffee”;
      Assert.assertEquals(ExpectedText, SearchWord.getText());
  }
}
module.exports = new SearchPage();
