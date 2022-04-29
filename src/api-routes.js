
const routes = {

    csrf: { url: 'http://localhost/sanctum/csrf-cookie' },
    register: { url: 'http://localhost/register' },
    login: { url: 'http://localhost/login' },
    logout: { url: 'http://localhost/logout' },

    getAllProducts: { url: 'http://localhost/api/v1/products' },
    getOrders: { url: 'http://localhost/api/v1/orders' },
    getCategories: { url: 'http://localhost/api/v1/categories' },
    getDeliveryMethods: { url: 'http://localhost/api/v1/delivery-methods' },
    getPaymentMethods: { url: 'http://localhost/api/v1/payment-methods' },

    sendOrder: { url: 'http://localhost/api/v1/orders' },

    //Pages Builder Requests
    buildLandingProductsPage: { url: 'http://localhost/api/v1/landing-products' },
    buildCartCheckoutPage: { url: 'http://localhost/api/v1/cart-checkout' }
}

export default routes