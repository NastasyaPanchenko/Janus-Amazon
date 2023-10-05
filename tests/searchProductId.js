const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');
const assert = require("assert");

const SearchPage = require('../pages/searchPage');

async SearchById () {
  // Create a WebDriver instance (choose the appropriate browser driver)
  const driver = new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the Amazon website or the relevant URL
    await driver.get(url); // Replace with the actual URL



    // Find the search input element and enter the product ID
    const searchInput = await driver.findElement(By.id("twotabsearchtextbox")); // Replace with the actual search input element selector
    const productId = 'B08VHD2WL7'; // Replace with the actual product ID you want to search for
    await searchInput.sendKeys(productId, Key.RETURN);
//*[@id="twotabsearchtextbox"]

    // Wait for the search results page to load
   // await driver.wait(until.titleContains(productId), 50000);

    // Verify that the expected product is found in the search results
    const productLinkText = await driver.findElement(By.linkText(productId)).getText();

    if (productLinkText === productId) {
      console.log(`Product "B0BJZMBBQM" found on Amazon.`);
    } else {
      console.error(`Product "B0BJZMBBQM" not found on Amazon.`);
    }
  }  catch (error) {
    console.error('Test case failed:', error);
  }  finally {

    // Close the WebDriver session
    await driver.quit();
  }
})();
