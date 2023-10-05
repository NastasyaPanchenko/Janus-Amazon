# Janus-Amazon

This is a project for Janus. The test is written in JavaScript and running on Node.js.

Summary

Selenium Page Object Model framework using JavaScript.

productPage.js - this test opens the Product page. Verify that the Main Product Image is displayed to confirm that it's a product page. 

addToCartPage.js  - The test opens the Product Pages. Checks if 'Add To Cart' button is on a page. Then click 'Add to Cart button. Product added to the cart if 'Added' text is displayed on the Product page. 

searchpage.js -  search by product name. The test opens the base Amazon URL. Enter a search WORD, then click - Enter. To verify that a search page displays the correct result the test will confirm that the Search WORD is displayed on the top left corner. 





# Dependencies

Create a new Project 
mkdir [projectName]

# Initialize Project 

npm init 

# Install Selenium
https://github.com/SeleniumHQ/seleniumhq.github.io/blob/trunk/README.md

npm install selenium-webdriver

# Install Chromedriver

npm install chromedriver


Install Node.js  or check if you have it installed already 
https://nodejs.org/en 
node -v

Install npm or check if you have it installed already 
https://www.npmjs.com/ or https://github.com/nvm-sh/nvm/blob/master/README.md
npm -v 

Mocha 
https://mochajs.org/



# To run the tests.

node test/test.js 

current example:    node pages/productPage.js
