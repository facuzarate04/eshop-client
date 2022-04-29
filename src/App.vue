<template>
  <div x-data="{ sidebarOpen: false, darkMode: false }" :class="{ 'dark': darkMode }">
    <div class="flex h-screen bg-gray-100 dark:bg-gray-800 font-roboto">
      <RouterView />
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    
  }   
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
