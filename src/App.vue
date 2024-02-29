<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainMenu from './components/MainMenu.vue'
</script>

<template>
   <MainMenu />

  <RouterView />
  
  <MainFooter />
</template>

<script>
import MainFooter from "./components/MainFooter.vue";

export default {
  components: { MainMenu, RouterView, MainFooter },
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
