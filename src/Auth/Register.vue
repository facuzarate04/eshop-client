<template>
    <div class="font-sans w-full">
        <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
            <div class="relative sm:max-w-sm w-full">
                <div class="card bg-gray-800 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                <div class="card bg-gray-300 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                    <label for="" class="block mt-3 text-sm text-gray-700 text-center font-semibold">
                        Crear tu cuenta
                    </label>
                    <form @submit.prevent="register" class="mt-10">
                        <div>
                            <input v-model="registerForm.name" type="text" placeholder="Nombre completo" class="mt-1 px-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                        </div>         
                        <div class="mt-6">
                            <input v-model="registerForm.email" type="email" placeholder="Correo electronico" class="mt-1 px-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                        </div>
                        <div class="mt-6">                
                            <input v-model="registerForm.password" type="password" placeholder="Contraseña" class="mt-1 px-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">                           
                        </div>
                        <div class="mt-6">                
                            <input v-model="registerForm.password_confirmation" type="password" placeholder="Repetir contraseña" class="mt-1 px-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">                           
                        </div>
            
                        <div class="mt-7">
                            <button type="submit" class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                Crear mi cuenta
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true
import ApiRoutes from '../api-routes'
export default {
    data() {
        return {
            registerForm: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            },
            errors: null
        }
    },
    methods: {
        register() {
            axios.get(ApiRoutes.csrf.url).then(response => {
                axios.post(ApiRoutes.register.url ,this.registerForm).then((response) => {
                    console.log(response)
                    response.status == 200 ? this.$router.push({name: 'products'}) : this.errors = response.data
                }).catch((error) => {
                    console.log(error)
                })
            });  
        }
    }
}
</script>

<style>

</style>