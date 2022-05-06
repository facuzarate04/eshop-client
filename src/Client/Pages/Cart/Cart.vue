<template>
    <ClientLayout
    >
        <section v-if="products && paymentMethods && deliveryMethods" class="md:flex">
            <div id="products" v-if="products" class="md:w-1/2">
                <div v-for="product in products" :key="product.id" class="m-2">
                    <ProductCartPreview :product="product" @removeProduct="removeProduct" />
                </div>
            </div>
            <div id="detail" class="md:fixed z-30 right-20 md:w-1/3 py-2">
                <div class="">
                    <strong class="text-xl">Total</strong>
                </div>
                <CheckoutForm  :products="products" :paymentMethods="paymentMethods" :deliveryMethods="deliveryMethods" />
            </div>
        </section>
        <section v-else class="absolute top-1/2 left-1/2 z-50">
            <svg class="animate-spin h-20 w-20 rounded-full bg-transparent border-2 border-gray-800 dark:border-transparent border-opacity-50 mx-auto" 
                style="border-right-color: white; border-top-color: white;" 
                viewBox="0 0 24 24">
            </svg>
        </section>
    </ClientLayout>
</template>

<script>
import ClientLayout from '../../../Layouts/ClientLayout.vue'
import axios from "axios";
import ProductCartPreview from '../../Components/Products/ProductCartPreview.vue'
import ApiRoutes from '../../../api-routes'
import CheckoutForm from '../../Components/Cart/CheckoutForm.vue'
export default {
    data() {
        return {
            products: null,
            deliveryMethods: null,
            paymentMethods: null,
        }
    },
    components: {
        ClientLayout,
        ProductCartPreview,
        CheckoutForm
    },
    methods: {
        renderLocalStorageCart() {
            let total = 0
            let values = []
            let keys = Object.keys(localStorage)
            let i = keys.length;
            while ( i-- ) { 
                values.push( JSON.parse(localStorage.getItem(keys[i])) )
            }
            this.products = values
            this.products.forEach(product => {
                total = total + (product.price * product.quantity)
            });
            this.total = Math.round(total * 100) / 100
            
        },
        removeProduct() {
            console.log(id)
            this.renderLocalStorageCart()
        }
    },
    mounted() {
        document.title = 'Mi Carrito'

        this.renderLocalStorageCart()

        axios.get(ApiRoutes.buildCartCheckoutPage.url).then((response) => {
            this.deliveryMethods = response.data.delivery_methods,
            console.log(response)
            this.paymentMethods = response.data.payment_methods
        }).catch((error) => {
            console.log(error)
        })

        /* axios.get(ApiRoutes.getDeliveryMethods.url).then((response) => {
            this.deliveryMethods = response.data
        }).catch((error) => {
            console.log(error)
        })
        axios.get(ApiRoutes.getPaymentMethods.url).then((response) => {
            this.paymentMethods = response.data
        }).catch((error) => {
            console.log(error)
        }) */

    },
    

}
</script>