<template>
    <div class="md:flex items-strech rounded-md shadow-md">
        <div class="md:w-4/12 2xl:w-1/4 w-full">
            <img :src="product.preview_image" alt="product_image" class="w-48 object-center object-cover md:block hidden rounded-l-md" />
            <img src="" alt="product_image" class="md:hidden w-full h-full object-center object-cover" />
        </div>
        <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
            <div class="flex items-start justify-between w-full pt-1">
                <p class="text-base text-left font-black leading-none text-gray-800 dark:text-white">{{product.name}}</p>
                <button @click.prevent="removeProduct" class="text-red-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
            <div class="flex space-x-4 justify-start items-center mt-2">
                <div class="flex space-x-2 items-center justify-start">
                    <p class="text-sm text-left">Cantidad:</p>
                    <input @change="setQuantity" v-model="quantity" type="number" min="1" :max="product.stock" class="md:w-12 py-1 text-center border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white rounded-md">
                </div>
                <p class="text-base font-bold text-left leading-none text-gray-800 dark:text-white">$ {{product.price}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quantity: this.product.quantity
        }
    },
    props: {
        product: Object
    },
    methods: {
        removeProduct() {
            localStorage.removeItem(this.product.id)
        },
        setQuantity() {
            this.product.quantity = this.quantity
            localStorage.setItem(this.product.id, JSON.stringify(this.product));
        }
    }
}
</script>

<style>

</style>