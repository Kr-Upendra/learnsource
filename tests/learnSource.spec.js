const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

describe("Learn Source", function () {
  this.timeout(80800);
  let driver;
  let vars;

  beforeEach(async function () {
    // Configure Chrome options for headless mode
    let options = new chrome.Options();
    options.addArguments(
      "--headless", // Run in headless mode
      "--disable-gpu", // Disable GPU for headless environments
      "--window-size=1366,768", // Set a fixed window size
      "--no-sandbox", // Bypass OS security model (for CI)
      "--disable-dev-shm-usage" // Prevent Chrome from using /dev/shm
    );

    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();
    vars = {};
  });

  afterEach(async function () {
    await driver.quit();
  });

  it("Detail Screen", async function () {
    await driver.get("http://localhost:3000/tool/google-chrome");
    await driver.manage().window().setRect({ width: 1366, height: 736 });
    await driver.findElement(By.css(".w-full > img")).click();
    await driver.findElement(By.css(".mt-4")).click();
    await driver.findElement(By.css(".bg-blue-600")).click();
    await driver.findElement(By.css(".my-6")).click();
    await driver.findElement(By.css(".text-8xl")).click();
    await driver.findElement(By.css(".justify-end")).click();
    await driver.findElement(By.css(".my-6")).click();
    await driver.findElement(By.css(".justify-end")).click();
    await driver.findElement(By.css(".w-full > img")).click();
    await driver.findElement(By.css(".bg-white")).click();
  });

  it("Home Screen", async function () {
    await driver.get("http://localhost:3000");
    await driver.manage().window().setRect({ width: 1366, height: 736 });
    await driver.findElement(By.css(".text-center")).click();
    await driver.findElement(By.css(".mt-8")).click();
    await driver.findElement(By.css(".text-center")).click();
    await driver.findElement(By.css(".text-center")).click();
    await driver.findElement(By.css(".mt-8")).click();
    await driver.findElement(By.css(".mt-8")).click();
    await driver.findElement(By.css(".mt-8")).click();
  });
});
