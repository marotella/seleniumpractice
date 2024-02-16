const {Builder, Capabilities, By, until, Key} = require ("selenium-webdriver");

let driver

beforeEach(async () => {
    driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
    await driver.get("http://localhost:3000");
})

afterEach(async ()=> {
    await driver.quit();
})

describe (" Testing movie app functionality", () => {
    test("create movie on the movie list", async () =>{
//Create movie:
 //TODO find the input field and enter the title 
        await driver.findElement(By.id("add-movie-input")).sendKeys("AAAAAAAAAA", Key.RETURN)
 //TODO find the add and click


    })

//Check box
//TODO find the check box and click it 
//TODO check that the aside occurs to confirm the click was successful

//Delete movie function
//TODO find the delete button and click 



})




