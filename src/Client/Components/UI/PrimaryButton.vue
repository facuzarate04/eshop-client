<template>
   <button :type="type" class="mx-auto py-2 px-4 bg-gray-800 text-white rounded-full">
        <slot></slot>
    </button>
</template>

<script>
export default {
    data() {
        return {
            type: {
                default: 'submit',
                type: String
            }
        }
    }
}
</script>

<style>

</style>