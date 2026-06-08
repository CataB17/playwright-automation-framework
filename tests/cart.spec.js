import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

test('user completes purchase successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Login
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    // Add product
    await productPage.addFirstProductToCart();
    await productPage.goToCart();

    // Cart validation
    await expect(cartPage.getCartItemName())
        .toHaveText('Sauce Labs Backpack');

    // Go to checkout
    await cartPage.goToCheckout();

    // Checkout step 1
    await checkoutPage.fillCheckoutInformation(
        'Catalina',
        'Borja',
        '07030'
    );

    await checkoutPage.continueCheckout();

    // Checkout step 2 validations
    await expect(page).toHaveURL(/checkout-step-two/);

    await expect(checkoutPage.itemName.first())
        .toHaveText('Sauce Labs Backpack');

    await expect(checkoutPage.itemPrice.first())
        .toHaveText('$29.99');

    // Finish purchase
    await checkoutPage.finishCheckout();

    // Final validation
    await expect(page.locator('.complete-header'))
        .toHaveText('Thank you for your order!');
});