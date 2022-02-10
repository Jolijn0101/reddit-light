const { Builder, By } = require('selenium-webdriver');
require('chromedriver');

async function example() {
  let driver = new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:3000/');
  let searchInput = driver.findElement(By.css('input'));
  await driver.manage().setTimeouts({ implicit: 10000 });
  driver.findElement(By.css('article')).then(console.log('loaded'));
  await searchInput.clear();
  await searchInput.sendKeys('sunflower');
  await searchInput.sendKeys('\uE007');
  await driver.manage().setTimeouts({ implicit: 10000 });
  driver.findElement(By.css('article')).click();
  await driver.manage().setTimeouts({ implicit: 10000 });
  driver
    .findElement(By.className('articlePage'))
    .then(console.log('ready for back click'));
  await driver.manage().setTimeouts({ implicit: 10000 });
  driver.findElement(By.className('subReddit')).click();
}

example();
