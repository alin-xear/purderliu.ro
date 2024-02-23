
<template>
  <MainHeader />

  <section class="projects">
    <div class="container px-md-5">
        <div v-if="error">{{ error }}</div>
      <div class="row" v-if="projects.length">



        wqerq
        {{ projects }}
        asd
      </div>
    </div>
  </section>
</template>


<script>
import MainHeader from "../components/MainHeader.vue";
import { ref } from "vue";
// import getProjects from "../composables/getProjects"
import getPosts from "../composables/getProjects";

export default {
  components: { MainHeader },
  setup() {

    const { projects, error, load } = getPosts();

    load();

    return { projects, error };
  },
};
</script>

<style>
</style>