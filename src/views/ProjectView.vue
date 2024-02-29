<template>
  <div>
    <div v-if="error">{{ error }}</div>

    <div v-if="project">
      <ProjectHeader :project="project" />
      <ProjectImages :images="project.images" />
    </div>
    <div v-else>
      <Spinner />
    </div>

  </div>
</template>

<script>
import { useRoute } from "vue-router";
import getProject from "../composables/getProject";
import Spinner from "../components/Spinner.vue";
import ProjectHeader from "../components/ProjectHeader.vue";
import ProjectImages from "../components/ProjectImages.vue";

export default {
  components: { ProjectHeader, ProjectImages, Spinner },
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const { error, project, load } = getProject(id);
    load();
    return { error, project };
  },
};
</script>

<style>
</style>