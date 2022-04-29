<template>
    <SideBar 
    :active="sidebar"
    />
    <div class="flex-1 flex flex-col overflow-hidden">
        <NavBar />
        <main class="flex-1 overflow-x-hidden overflow-y-auto">
            <div class="container mx-auto px-6 py-8">
                <slot></slot>
            </div>
        </main>
    </div>
</template>

<script>
import SideBar from '../Client/Components/SideBar.vue'
import NavBar from '../Client/Components/NavBar.vue'
export default {
    data() {
        return {
            
        }
    },
    components: {
        SideBar,
        NavBar
    },
    props: {
        sidebar: String
    }
}
</script>

<style>

</style>