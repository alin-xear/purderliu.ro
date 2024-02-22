<template>
    <nav class="mainMenu">
    
    <div class="container-fluid px-4 px-md-5 d-flex justify-content-between">
     
      <RouterLink :to="{ name: 'home'}">PURDELIU.RO</RouterLink>

      <div @click="handleOpenMenu" class="burger" :class="{ active: isOpenMenu} ">
        MENU
      </div>

      <div class="menuItems" :class="{active : isOpenMenu}">
        <div class="close" @click="handleOpenMenu">&times;</div>
        <ul class="list-unstyled">
          <li><a href="index.html">HOME</a></li>
          <li><a href="about.html">ABOUT</a></li>
          <li><a href="contact.html">CONTACT</a></li>
        </ul>
      </div>

    </div>

  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const isOpenMenu = ref(false)

    const handleOpenMenu = () => {
      isOpenMenu.value = !isOpenMenu.value
    }

    return { isOpenMenu, handleOpenMenu }
  }
}
</script>

<style scoped>
.burger {
  cursor: pointer;
}
</style>