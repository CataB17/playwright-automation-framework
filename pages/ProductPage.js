// ProductPage handles actions related to product listing page
class ProductPage {
    constructor(page) {
        this.page = page;

        // Locator for the first product add-to-cart button
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

        // Cart icon (used to navigate to cart page)
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    // Add first product to cart
    async addFirstProductToCart() {
        await this.addToCartButton.click();
    }

    // Navigate to cart page
    async goToCart() {
        await this.cartIcon.click();
    }
}

export default ProductPage;