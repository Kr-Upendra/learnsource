const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

describe("Learn Source Test Suite", function () {
  this.timeout(30000);
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
    await driver.get("http://localhost:8080/tool/google-chrome");
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
    await driver.get("http://localhost:8080");
    await driver.manage().window().setRect({ width: 1366, height: 736 });
    await driver.findElement(By.css(".text-center")).click();
    await driver.findElement(By.css(".mt-8")).click();
    await driver.findElement(By.css(".text-center")).click();
    await driver.findElement(By.css(".text-center")).click();
    await driver.findElement(By.css(".mt-8")).click();
    await driver.findElement(By.css(".mt-8")).click();
    await driver.findElement(By.css(".mt-8")).click();
  });

  it("UserScreen", async function () {
    await driver.get("http://localhost:8080/users");
    await driver.manage().window().setRect({ width: 1366, height: 736 });
    await driver.findElement(By.css(".text-center")).click();
    await driver.findElement(By.css(".min-h-screen > div")).click();
    await driver.findElement(By.css(".mt-8")).click();
    await driver.findElement(By.css(".px-3:nth-child(7) > h1")).click();
    await driver.findElement(By.css(".px-3:nth-child(7)")).click();
    await driver.findElement(By.css(".px-3:nth-child(8)")).click();
    await driver.findElement(By.css(".px-3:nth-child(4)")).click();
    await driver.findElement(By.css(".px-3:nth-child(2)")).click();
    await driver.findElement(By.css(".px-3:nth-child(1)")).click();
    await driver.findElement(By.css(".px-3:nth-child(5)")).click();
    await driver.findElement(By.css(".px-3:nth-child(6) > h1")).click();
    await driver.findElement(By.css(".px-3:nth-child(6) > h1")).click();
  });
});
