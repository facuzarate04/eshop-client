<template>
    <div class="relative bg-gray-200 dark:bg-gray-300 py-2 rounded-md">
        <button @click="addToCart" class="absolute z-10 top-3 right-1 bg-gray-200 hover:bg-gray-300 p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        </button>
        <ImageSlider :images="product.images" :url="'small_image'"/>
        <router-link class="relative hover:cursor-pointer" :to="{ name: 'show-product', params: { id: product.id }}">
            <div class="space-y-2">
                <h4 class="text-md text-gray-700 dark:text-gray-800"><strong>{{product.name}}</strong></h4>
                <h6 class="text-sm text-gray-700 dark:text-gray-800"><strong>$ {{product.price}}</strong></h6>
            </div>
        </router-link>
    </div>
</template>

<script>
import ImageSlider from '../../Components/ImageSlider.vue'
export default {
    data() {
        return {
            
        }
    },
    components: {
        ImageSlider
    },
    props: {
        product: Object
    },
    methods: {
        addToCart() {
            let product = {
                id: this.product.id,
                name: this.product.name,
                price: this.product.price,
                stock: this.product.stock,
                preview_image: this.product.preview_image,
                images: this.product.images,
                quantity: 1,
                category: this.product.subCategory.category.name,
                subCategory: this.product.subCategory.name
            }
            localStorage.setItem(product.id, JSON.stringify(product))
        }
    }
}
</script>