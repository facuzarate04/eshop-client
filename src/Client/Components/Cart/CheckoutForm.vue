<template>
    <form  method="post" class="bg-gray-200 rounded-md space-y-2">
        <div class="py-6 space-y-4">
            <fieldset id="deliveryMethods" class="flex justify-center items-center space-x-4">
                <div v-for="deliveryMethod in deliveryMethods" :key="deliveryMethod" class="flex items-center space-x-2">
                    <input v-model="orderForm.delivery_method_code" :value="deliveryMethod.code" type="radio" id="deliveryMethods">
                    <label >{{deliveryMethod.name}}</label>
                </div>
            </fieldset>
            <fieldset id="paymentMethods" class="flex justify-center items-center space-x-4">
                <div v-for="paymentMethod in paymentMethods" :key="paymentMethod" class="flex items-center space-x-2">
                    <input v-model="orderForm.payment_method_code" :value="paymentMethod.code" type="radio" id="paymentMethods">
                    <label  class="flex space-x-2 items-center">
                        <img :src="paymentMethod.image.small_image" class="h-12" alt="">
                        <p>{{paymentMethod.code}}</p>
                    </label>
                </div>
            </fieldset>
        </div>
        <div class="rounded-b-md py-4 bg-gray-300">
            <PrimaryButton :type="'button'" @click.prevent="sendOrder">Comprar</PrimaryButton>
        </div>
    </form>
</template>

<script>
import PrimaryButton from '../UI/PrimaryButton.vue'
import ApiRoutes from '../../../api-routes'
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
    data() {
        return {
            orderForm: {
                delivery_method_code: null,
                payment_method_code: null,
                products: this.products
            }
        }
    },
    props: {
        deliveryMethods: Array,
        paymentMethods: Array,
        products: Array
    },
    components:{
        PrimaryButton
    },
    methods: {
        sendOrder() {
            axios.post(ApiRoutes.sendOrder.url, this.orderForm).then((response) => {
                localStorage.clear()
                response.status == 200 ? this.$router.push({name: 'orders'}) : false
            }).catch((error) => {
                console.log(error)
            })
        }
    },
}
</script>