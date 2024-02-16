const { Builder, Capabilities, By, until, Key } = require("selenium-webdriver");

let driver

beforeEach(async () => {
    driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
    await driver.get("http://localhost:3000");
})

afterEach(async () => {
    await driver.quit();
})

describe(" Testing movie app functionality", () => {
    test("create movie on the movie list", async () => {
        //Create movie:
        //TODO find the input field and enter the title 
        await driver.findElement(By.id("add-movie-input")).sendKeys("AAAAAAAAAA", Key.RETURN)
    }),
        test("check off one of the movies", async () => {
            //TODO find the check box and click it 
            //TODO check that the aside occurs to confirm the click was successful

            await driver.findElement(By.id("add-movie-input")).sendKeys("AAAAAAA", Key.RETURN)
            await driver.findElement(By.id("movie-0")).click()
        })



    //Delete movie function
    //TODO find the delete button and click 



})




