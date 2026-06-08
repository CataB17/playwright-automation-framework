// LoginPage represents the login screen of the application
// It contains all locators and actions related to logging in
class LoginPage {

    // Constructor receives the Playwright page object
    constructor(page) {
        this.page = page;

        // Locators (UI elements on the login page)
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    // Navigate to the login page
    async open() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    // Enter username into the username field
    async enterUsername(user) {
        await this.username.fill(user);
    }

    // Enter password into the password field
    async enterPassword(pass) {
        await this.password.fill(pass);
    }

    // Click on the login button
    async clickLogin() {
        await this.loginButton.click();
    }

    // Complete login flow (high-level business action)
    async login(user, pass) {
        await this.enterUsername(user);
        await this.enterPassword(pass);
        await this.clickLogin();
    }

}

export default LoginPage;