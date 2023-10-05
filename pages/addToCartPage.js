
const {Builder, By, Key } = require('selenium-webdriver');
const SearchPage = require('../pages/searchPage');
const ProductPage = require('../pages/productPage');
var driver = new Builder().forBrowser("chrome").build();

const productURL = "https://www.amazon.com/Black-Rifle-Coffee-Chocolate-Responders/dp/B075M2R43C/ref=sr_1_1_sspa?crid=26FK5YC6L7DAJ&keywords=coffee&qid=1696479361&sprefix=coffee%2Caps%2C173&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"

 class addToCartProduct {

  constructor(driver) {
    this.driver = driver }

     async addToCart() {
     // go to product URL
        await productPage.enter_productURL(productURL);

     // find 'Add To Cart' button
        await this.findElement(By.id("mbc-buybutton-addtocart-1")).click();

       //async productAddedDisplays() {
       //const checkBox = this.driver.locator("mbc-offer-added-to-cart-1")

       const checkBoxAdded = await this.driver.findElement(By.id("mbc-offer-added-to-cart-1"));
           return await checkBoxAdded.isDisplayed();

       }
    }
    module.exports = new AddToCartProduct();
