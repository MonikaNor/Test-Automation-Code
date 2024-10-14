describe("Text Box Challenge", () => {
  //VISTACREAT-29 Test Case
  it("1- Verify that user can Log out successfully", async () => {
    await browser.url(
      "https://create.vista.com/auth-init?v=1.364.1&culture=en-US"
    );

    // Defining web elements
    const emailAddress = await $("#sign-in-email");
    const password = await $("#signInPassword");
    const signinButton = await $("#signin-form > button");
    const userMenu = await $(
      "#app-view > div.headerWrapper-1-2t5 > div:nth-child(3) > div > div"
    );
    const logOut = await $("#userMenu > div > a:nth-child(13)");

    // Running the test
    // Logging in
    await emailAddress.waitForDisplayed();
    await browser.pause(1000);
    await emailAddress.setValue("testingtravelinsuranceoi@mailsac.com");
    await browser.pause(500);
    await password.setValue("Aaaaaaaa1");
    await browser.pause(500);
    await signinButton.click();
    await browser.pause(500);
    //Logging out
    await userMenu.waitForDisplayed();
    await userMenu.click();
    await browser.pause(500);
    await logOut.waitForDisplayed();
    await logOut.click();
  });
});
