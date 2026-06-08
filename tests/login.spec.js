import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('user can login successfully with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Navigate to login page
    await loginPage.open();

    // Perform login action
    await loginPage.login('standard_user', 'secret_sauce');

    // Validate successful login by checking URL
    await expect(page).toHaveURL(/inventory/);
});

test('user should not be able to login with invalid password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Open login page
    await loginPage.open();

    // Attempt login with invalid credentials
    await loginPage.login('standard_user', 'WrongPassword');

    // Validate error message
    await expect(page.locator('[data-test="error"]'))
  .toContainText('Username and password do not match');
});