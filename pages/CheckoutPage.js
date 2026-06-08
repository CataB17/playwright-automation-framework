// CheckoutPage handles the checkout form and order completion
class CheckoutPage {

    constructor(page) {
        this.page = page;

        // Checkout form locators
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.itemName = page.locator('.inventory_item_name'); 
        this.itemPrice = page.locator('.inventory_item_price');

        // Final action
        this.finishButton = page.locator('#finish');

        // Confirmation (better placed in a separate page, but ok for now)
        this.confirmationHeader = page.locator('.complete-header');
    }

    // Fill customer information form
    async fillCheckoutInformation(first, last, zip) {
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.postalCode.fill(zip);
    }

    // Continue to next checkout step
    async continueCheckout() {
        await this.continueButton.click();
    }

    // Finish purchase
    async finishCheckout() {
        await this.finishButton.click();
    }

    // Get confirmation message
    getConfirmationMessage() {
        return this.confirmationHeader;
    }
}

export default CheckoutPage;