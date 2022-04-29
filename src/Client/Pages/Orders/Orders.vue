<template>
    <ClientLayout
    :sidebar="'orders'"
    >
        <section v-if="orders" class="grid grid-cols-4 gap-6">
            <!-- Order Component -->
            <div v-for="order in orders" :key="order.id" class="rounded-md relative w-72 shadow-2xl p-3 bg-white">
                <div class="py-2">
                    <div class="text-center text-xl font-bold">ORDEN</div>
                    <div class="text-center text-xs font-semibold">Email del cliente <p class="font-light">{{order.user.email}}</p></div>
                </div>
                <div class="text-center text-xs font-bold mb-1">~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
                <div class="text-xs pl-2">
                    <div>Nro de orden: {{order.number}}</div>
                </div>
                <div class="border-double border-t-4 border-b-4 border-l-0 border-r-0 border-gray-900 my-3">
                    <div class="flex text-sm pt-1 px-1">
                        <span class="w-2/6">Nombre</span>
                        <span class="w-2/6 text-right">Precio</span>
                        <span class="w-2/6 text-right">Cantidad</span>
                    </div>
                    <div class="border-dashed border-t border-b border-l-0 border-r-0 border-gray-900 mt-1 my-2 py-2 px-1">
                        <div v-for="product in order.products" :key="product.id" class="flex justify-between text-sm">
                            <span class="w-2/6 truncate">{{product.name}}</span>
                            <span class="w-2/6 text-right">$ {{product.pivot.price_paid}}</span>
                            <span class="w-2/6 text-right">{{product.pivot.quantity}}</span>
                        </div>
                    </div>
                </div>
                <div class="text-xs text-right space-y-2 my-2">
                    <div>Fecha: {{order.created_at}}</div>
                    <div class="font-bold text-sm">Total: $ {{order.price_paid}}</div>
                </div>
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
import axios from 'axios'
import ApiRoutes from '../../../api-routes'
export default {
    data() {
        return {
            orders: null
        }
    },
    components: {
        ClientLayout
    },
    props: {

    },
    mounted() {
        document.title = 'Mis Compras'
        axios.get(`${ApiRoutes.getOrders.url}?page=${this.page}`, {withCredentials:true}).then((response) => {
            this.orders = response.data.orders
        }).catch((error) => {
            console.log(error)
        })
    }

}
</script>