<template>
  <header class="mainHeader" :class="{active: isActiveMainHeader}">
  <img src="@/assets/images/header.jpg" width="100%" alt="">
  <div class="content">
    <div class="container">
      <div class="position-relative text-center">
        <span class="blend-overlay tagline">#designingwithattitude</span>
        <span class="blend-colordodge tagline2">designingwithattitude</span>
      </div>
      <h1 class="blend-overlay">If you can't change your attitude, then change your designer.</h1>
    </div>
  </div>

  <!-- <a href="javascript:void(0)" class="scrollOneScreen">
    <i class="fas fa-angle-down"></i>
  </a> -->
  </header>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const isActiveMainHeader = ref(false)
    setTimeout( () => {
      isActiveMainHeader.value = true
    })
    return { isActiveMainHeader }
  }

}
</script>

<style>

</style>