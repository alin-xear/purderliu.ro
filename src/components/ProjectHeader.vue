

<template>
  <header class="projectHeader">
      <div class="container-fluid px-md-5 text-center">
        <img
          :src="'../'+project.images[1].src"
          :alt="project.title"
          class="logo"
        />
        <h1 class="kottario">{{ project.title }}</h1>

        <p class="mb-0 pb-md-5">
          <span v-for="(tag, index) in project.tags" :key="tag">
            {{ tag }}
            <span v-if="index != project.tags.length - 1">, </span>
          </span>

          <br />

          <i class="fs16 fas fa-map-marker-alt me-2"></i>{{ project.location }}
          <i class="fs16 fas fa-calendar-check ms-3 me-2"></i
          >{{ project.status }}
        </p>

        <a :href="project.url" target="_blank" class="fs16 mt-5 d-inline-block"
          >VISIT THE CLIENT’S PAGE</a
        >
      </div>
    </header>
</template>

<script>

export default {
  props: ['project']
}
</script>

<style>

</style>