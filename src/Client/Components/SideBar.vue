<template>
    <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false"
        class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden">
    </div>

    <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
        class="fixed z-30 inset-y-0 left-0 w-60 transition duration-300 transform bg-white dark:bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
        <div class="flex items-center justify-center mt-8">
            <div class="flex items-center">
                <span class="text-gray-800 dark:text-white text-2xl font-semibold">Dashboard</span>
            </div>
        </div>

        <nav class="flex flex-col mt-10 px-4 text-center">
            <router-link
                :to="{name: 'profile'}"
                :class="{'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-100': active == 'profile'}"
                class="mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100  hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
                Mi Perfil
            </router-link>
            <router-link
                :to="{name: 'products'}"
                :class="{'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-100': active == 'products'}" 
                class="mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100  hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
                Ver Productos
            </router-link>
            <router-link
                :to="{name: 'orders'}"
                :class="{'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-100': active == 'orders'}" 
                class="mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100  hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
                Mis compras
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        active: {
            default: null,
            active: String
        }
    }
}
</script>

<style>

</style>