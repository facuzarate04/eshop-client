<template>
    <ClientLayout
    :sidebar="'products'"
    >
        <div class="p-2 md:flex justify-end mb-2">
            <FilterBar 
            :categories="categories"
            @filterProducts="filterProducts"
            />
        </div>
        <section v-if="products" class="grid lg:grid-cols-4 gap-2">
            <div v-for="product in products" :key="product.id" class="m-2">
                <ProductPreview :product="product"/>
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
import ProductPreview from '../../Components/Products/ProductPreview.vue'
import FilterBar from '../../Components/AllProductsFilterBar.vue'
import ApiRoutes from '../../../api-routes'

export default {
    data() {
        return {
            products: null,
            categories: null,
            paginator: null,
            page: 1,
            filters: {}
        }
    },
    components: {
        ClientLayout,
        ProductPreview,
        FilterBar
    },
    props: {
        
    },
    methods: {
        filterProducts(filters) {
            axios.get(`${ApiRoutes.getAllProducts.url}?page=${this.page}`,{
                params: {
                    ...(filters.search ? { 'filter[name]': filters.search } : {}),
                    ...(filters.category ? { 'filter[category]': filters.category.id } : {}),
                    ...(filters.subCategory ? { 'filter[sub]': filters.subCategory.id } : {})
                }
            }).then((response) => {
                this.products = response.data
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    mounted() {
        document.title = 'Productos'
        
        axios.get(`${ApiRoutes.buildLandingProductsPage.url}?page=${this.page}`, {withCredentials:true}).then((response) => {
            this.products = response.data.products,
            this.categories = response.data.categories
        }).catch((error) => {
            console.log(error)
        })
    }

}
</script>

<style>

</style>