<template>
  <nav class="mainMenu">
    <div class="container-fluid px-4 px-md-5 d-flex justify-content-between">
      <RouterLink :to="{ name: 'home' }">PURDELIU.RO</RouterLink>

      <div
        @click="handleMenuClick"
        class="burger"
        :class="{ active: isOpenMenu }"
      >
        MENU
      </div>

      <div class="menuItems" :class="{ active: isOpenMenu }">
        <div class="close" @click="handleMenuClick">&times;</div>
        <ul class="list-unstyled">
          <li>
            <RouterLink :to="{ name: 'home' }">HOME</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'about' }">ABOUT</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'contact' }">CONTACT</RouterLink>
          </li>
          <li v-if="isLoggedIn">
            <a href="javascript:void(0)" @click="handleLogout">Log out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted, ref } from "vue";
import useLogout from "../composables/useLogout";
import firebase from "firebase/compat/app";
import { useRouter } from "vue-router";

export default {
  props: ["isLoggedIn"],
  setup(props) {
    const isOpenMenu = ref(false);
    const router = useRouter();
    const isLoggedIn = ref(false);
    const menuItems = ref('');

    const handleMenuClick = () => {
      isOpenMenu.value = !isOpenMenu.value;
    };

    const { error, logout } = useLogout();

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        router.push({ name: "home" });
        isLoggedIn.value = false;
        handleMenuClick();
        console.log("User logged out and redirected to home");
      }
    };

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        isLoggedIn.value = true;
      }
    });

    onMounted(()=>{
      const menuItems = document.querySelector('.menuItems').querySelectorAll('a');
      menuItems.forEach(item => {
        item.addEventListener('click', () => {
        handleMenuClick();
      })
      })
    })

    return { isOpenMenu, handleMenuClick, handleLogout, isLoggedIn };
  },
};
</script>

<style scoped>
.burger {
  cursor: pointer;
}
</style>