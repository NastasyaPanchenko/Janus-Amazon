
const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();


//describe block
//describe("search for a cat", function(){

//it block
//it ("successfully found cat's products", async function(){

//launch the browser
let driver = await new Builder().forBrowser("chrome").build();

// navigate to our application
await driver.get("https://www.amazon.com/")

//add a to do
await driver.findElement(By.id("twotabsearchtextbox")).sendKeys("cat", Key.RETURN);

//assert
let catText = await driver.findElement(By.xpath("//span[2]/div/h1/div/div[1]/div/div/span[3]")).getText().then(function(value){
return value;
});

//assert using chai should
catText.should.equal("cat");

//close the browser
await driver.quit();

});
//});

//assert using node
//assert.strictEqual(catText,"cat");

