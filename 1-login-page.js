describe("Text Box Challenge", () => {
  //VISTACREAT-1 Test Case
  it("1 - Verify that Log In is successful when entering correct Email and Password", async () => {
    await browser.url(
      "https://create.vista.com/auth-init?v=1.364.1&culture=en-US"
    );

    // Defining web elements
    const emailAddress = await $("#sign-in-email");
    const password = await $("#signInPassword");
    const signinButton = await $("#signin-form > button");

    // Running the test
    await emailAddress.waitForDisplayed();
    await emailAddress.setValue("testingtravelinsuranceoi@mailsac.com");
    await browser.pause(1000);
    await password.setValue("Aaaaaaaa1");
    await browser.pause(1000);
    await signinButton.click();
  });

  //VISTACREAT-2 Test Case
  it("2 - Verify that Log In failed when entering correct Email and Wrong Password ", async () => {
    await browser.url(
      "https://create.vista.com/auth-init?v=1.364.1&culture=en-US"
    );

    // Defining web elements
    const emailAddress = await $("#sign-in-email");
    const password = await $("#signInPassword");
    const signinButton = await $("#signin-form > button");
    const errorMsg = await $(
      "#root > div > main > div > div:nth-child(1) > div.swan-mt-4 > div:nth-child(1) > div > div > div > div > div"
    );

    // Running the test
    await emailAddress.waitForDisplayed();
    await emailAddress.setValue("testingtravelinsuranceoi@mailsac.com");
    await browser.pause(1000);
    await password.setValue("aaaaaaaa");
    await browser.pause(1000);
    await signinButton.click();
    await browser.pause(1000);
    await errorMsg.waitForDisplayed();
    assert.equal("Wrong email or password.", await errorMsg.getText());
  });

  //VISTACREAT-3 Test Case
  it("3 - Verify that Log In failed when entering Wrong Email and Password", async () => {
    await browser.url(
      "https://create.vista.com/auth-init?v=1.364.1&culture=en-US"
    );

    // Defining web elements
    const emailAddress = await $("#sign-in-email");
    const password = await $("#signInPassword");
    const signinButton = await $("#signin-form > button");
    const errorMsg = await $(
      "#root > div > main > div > div:nth-child(1) > div.swan-mt-4 > div:nth-child(1) > div > div > div > div > div"
    );

    // Running the test
    await emailAddress.waitForDisplayed();
    await emailAddress.setValue("travelinsuranceoi@mailsac.com");
    await browser.pause(1000);
    await password.setValue("aaaaaaaa");
    await browser.pause(1000);
    await signinButton.click();
    await browser.pause(1000);
    await errorMsg.waitForDisplayed();
    assert.equal("Wrong email or password.", await errorMsg.getText());
  });

  //VISTACREAT-4 Test Case
  it("4 - Verify that Log In failed when entering Wrong Email and correct Password", async () => {
    await browser.url(
      "https://create.vista.com/auth-init?v=1.364.1&culture=en-US"
    );

    // Defining web elements
    const emailAddress = await $("#sign-in-email");
    const password = await $("#signInPassword");
    const signinButton = await $("#signin-form > button");
    const errorMsg = await $(
      "#root > div > main > div > div:nth-child(1) > div.swan-mt-4 > div:nth-child(1) > div > div > div > div > div"
    );

    // Running the test
    await browser.pause(1000);
    await emailAddress.waitForDisplayed();
    await emailAddress.setValue("travelinsuranceoi@mailsac.com");
    await browser.pause(500);
    await password.setValue("Aaaaaaaa1");
    await browser.pause(1000);
    await signinButton.click();
    await browser.pause(500);
    await errorMsg.waitForDisplayed();
    assert.equal("Wrong email or password.", await errorMsg.getText());
  });
});
