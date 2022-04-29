<template>
    <ClientLayout
    :sidebar="'profile'"
    >
        <div class="grid place-items-center h-96 text-gray-500 dark:text-gray-300 text-xl border-4 border-gray-300 border-dashed">
            Profile Content
        </div>
    </ClientLayout>
</template>

<script>
import ClientLayout from '../../../Layouts/ClientLayout.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        ClientLayout
    },
    props: {

    },
    mounted() {
        document.title = 'Mi Perfil'
    }

}
</script>

<style>

</style>