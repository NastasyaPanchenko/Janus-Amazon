const {Builder, By, Key } = require('selenium-webdriver');
var driver = new Builder().forBrowser("chrome").build();


 class ProductPage {

  constructor(driver) {
    this.driver = driver }

     async goToProductPage() {

     // go to product URL
        await this.driver.get(productURL);

     // confirm Product page has Main product image

       const mainImage  = await this.driver.findElement(By.id('main-image-container"]/ul/li[1]/span/span'));
           return await mainImage.isDisplayed();

       }
    }
    module.exports = new ProductPage();
