<template>
  <section class="projects">
    <div class="container px-md-5">
      <div v-if="error">{{ error }}</div>

      <masonry-wall
        :items="projects"
        :ssr-columns="4"
        :max-columns="4"
        :column-width="200"
        :gap="30"
      >
        <template #default="{ item }">
          <RouterLink
            :to="{ name: 'Projects', params: { id: item.id } }"
            class="project"
          >
            <img
              :src="item.images[0].src"
              :alt="item.title"
              class="img-fluid"
            />

            <div class="proj-title">{{ item.title }}</div>
            <div class="categ">
              <span v-for="tag in item.tags" :key="tag">
                {{ tag }}
              </span>
            </div>
          </RouterLink>
        </template>
      </masonry-wall>
    </div>
  </section>
</template>

<script>
export default {
  props: ["projects", "error"],
};
</script>

<style>
</style>