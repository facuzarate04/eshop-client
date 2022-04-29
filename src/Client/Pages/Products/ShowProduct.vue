<template>
    <ClientLayout>
        <section v-if="product" class="p-2">
            <div class="w-3/4 md:w-1/2 mx-auto mb-4">
                <div class="mb-4 bg-gray-200">
                    <ImageSlider :images="product.images" :url="'large_image'" :thumb="true"/>
                </div>
                <!-- <img v-if="product.preview_image" class="mx-auto mb-2 w-full h-48 object-cover bg-gray-300"  :src="product.preview_image" alt="product_image"> -->
                <div class="space-y-2">
                    <h4 class="text-md text-gray-700 dark:text-gray-300"><strong>{{product.name}}</strong></h4>
                    <h6 class="text-sm text-gray-700 dark:text-gray-300"><strong>$ {{product.price}}</strong></h6>
                </div>
            </div>
            <div class="flex space-x-2 items-center justify-center">
                <button @click.prevent="addToCart" class="p-2 px-4 bg-blue-300 flex space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p>Add to Cart</p>
                </button>
                <button class="p-2 px-4 bg-blue-300 flex space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Buy</p>
                </button>
            </div>
        </section>
        <section v-else class="absolute top-1/2 left-1/2 z-50">
            <svg class="animate-spin h-20 w-20 rounded-full bg-transparent border-2 border-transparent border-opacity-50 mx-auto" 
                style="border-right-color: white; border-top-color: white;" 
                viewBox="0 0 24 24">
            </svg>
        </section>
    </ClientLayout>
</template>

<script>
import ClientLayout from '../../../Layouts/ClientLayout.vue'
import axios from "axios";
import ImageSlider from '../../Components/ImageSlider.vue'
export default {
    data() {
        return {
            product: {}
        }
    },
    components: {
        ClientLayout,
        ImageSlider
    },
    props: {
    },
    methods:{
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
    },
    mounted() {
        axios.get("http://localhost/api/v1/products/"+this.$route.params.id).then((response) => {
            this.product = response.data
        }).catch((error) => {
            console.log(error)
        })
    }
}
</script>

<style>

</style>