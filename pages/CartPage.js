// CartPage handles cart validations and actions
class CartPage {
    constructor(page) {
        this.page = page;

        this.cartItem = page.locator('.cart_item');
        this.cartItemName = page.locator('.inventory_item_name');
        this.checkoutButton = page.locator('#checkout');
    }

    // Get product name in cart
    getCartItemName() {
        return this.cartItemName.first();
    }

    // Proceed to checkout
    async goToCheckout() {
        await this.checkoutButton.click();
    }
}

export default CartPage;