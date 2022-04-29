<template>
    <div>
        <button @click="dropdownOpen = !dropdownOpen"
            class="flex items-center space-x-2 relative focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        </button>
    </div>
    <div>
        <div class="absolute min-w-max right-0 mt-2 bg-white rounded-md overflow-hidden shadow-xl z-10"
            v-show="dropdownOpen" 
            x-transition:enter="transition ease-out duration-100 transform"
            x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-75 transform"
            x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
            >
            <div v-if="products && products.length > 0" class="my-2">
                <div v-for="product in products" :key="product.id" class="block px-4 text-sm text-gray-700 my-4">
                    <CartProduct :product="product"/>
                </div>
                <div class="flex items-center justify-between px-4">
                    <div class="flex items-center justify-center space-x-2">
                        <strong>Total: </strong>
                        <strong>$ {{total}}</strong>
                    </div>
                    <router-link :to="{ name: 'cart' }" class="py-1 px-4 bg-gray-800 text-white rounded-full">Ver mi carrito</router-link>
                </div>
            </div>
            <div v-else class="p-10 md:w-96">
                <router-link :to="{name: 'products'}" class="block px-4 py-2 text-sm text-gray-700">
                    <strong>Ver productos</strong>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import CartProduct from './Products/DropdownCartProduct.vue'
export default {
    data() {
        return {
            dropdownOpen: false,
            products: null,
            total: null
        }
    },
    components: {
        CartProduct
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
            
        }
    },
    mounted() {
        this.renderLocalStorageCart()
    },
    updated() {
        this.renderLocalStorageCart()
    }
}
</script>

<style>

</style>