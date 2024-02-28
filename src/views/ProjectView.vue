<template>
<div>
  <div v-if="error">{{ error }}</div>

  <div v-if="project">
    
    <ProjectHeader :project=project />

    
  </div>
  <div v-else>Loading project...</div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import getProject from "../composables/getProject";
import ProjectHeader from "../components/ProjectHeader.vue"
export default {
  components: { ProjectHeader },
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