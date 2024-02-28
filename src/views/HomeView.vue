
<template>

  <MainHeader />

  <section class="projects">
    <div class="container px-md-5">
      <div v-if="error">{{ error }}</div>
      <div class="row" v-if="projects.length">
        <div
          class="col-6 col-md-4 col-lg-3"
          v-for="project in projects"
          :key="project.id"
        >
          <RouterLink
            :to="{ name: 'Projects', params: { id: project.id } }"
            class="project"
          >
            <img
              :src="'./src/assets/' + project.images[0]"
              :alt="project.title"
              class="img-fluid"
            />
            <div class="proj-title">{{ project.title }}</div>
            <div class="categ categ-1">
              <span v-for="tag in project.tags" :key="tag">
                {{ tag }}
              </span>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import MainHeader from "../components/MainHeader.vue";
import getProjects from "../composables/getProjects";

export default {
  components: { MainHeader },
  setup() {
    const { projects, error, load } = getProjects();

    load();

    return { projects, error };
  },
};
</script>

<style>
</style>