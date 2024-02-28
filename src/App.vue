<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainMenu from './components/MainMenu.vue'
</script>

<template>
   <MainMenu />

  <RouterView />
</template>

<script>

export default {
  components: { MainMenu, RouterView },
  setup() {
    

  },
}
</script>


<style>
  button{ 
   background-color: transparent;
   border: 1px solid white;
   color: white;
   padding: 8px 32px; 
  }
</style>
