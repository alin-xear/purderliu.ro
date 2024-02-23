<template>
  <div class="loginWrap">
    <div class="container">
      <form @submit.prevent="handleLogin">
        <input type="email" required v-model="email" placeholder="email" />
        <hr />
        <input
          type="password"
          required
          v-model="password"
          placeholder="password"
        />
        <br />
        <button type="submit">Log in</button>
        <br />
        <div class="error">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const { error, login } = useLogin();

    const handleLogin = async () => {
      await login(email.value, password.value);
      
      if (!error.value) {
        router.push({ name: "AddProject" });
      }
      console.log('successfully logged in');
    };

    return { email, password, error, handleLogin };
  },
};
</script>


<style scoped>
.loginWrap {
  padding-top: 200px;
  text-align: center;
}
input {
  padding: 8px 12px;
  display: block;
  width: 100%;
}
</style>