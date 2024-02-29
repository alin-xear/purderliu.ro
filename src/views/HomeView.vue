
<template>
  <MainHeader />

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
                :src="'./src/assets/' + item.images[0].src"
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

      <!-- <div class="projectsWrap" v-if="projects.length">
        
          <RouterLink
            :to="{ name: 'Projects', params: { id: project.id } }"
            class="project"
            v-for="project in projects"
            :key="project.id"
          >
            <img
              :src="'./src/assets/' + project.images[0].src"
              :alt="project.title"
              class="img-fluid"
            />
            <div class="proj-title">{{ project.title }}</div>
            <div class="categ">
              <span v-for="tag in project.tags" :key="tag">
                {{ tag }}
              </span>
            </div>
          </RouterLink>
      </div> -->
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
.masonry-column:nth-child(1) .masonry-item:nth-child(1) .categ {
  color: #a7ffed;
}
.masonry-column:nth-child(1) .masonry-item:nth-child(2) .categ {
  color: #3a5aff;
}
.masonry-column:nth-child(1) .masonry-item:nth-child(3) .categ {
  color: #ffb400;
}
.masonry-column:nth-child(1) .masonry-item:nth-child(4) .categ {
  color: #6c00ff;
}
.masonry-column:nth-child(1) .masonry-item:nth-child(5) .categ {
  color: #ffe746;
}

.masonry-column:nth-child(2) .masonry-item:nth-child(1) .categ {
  color: #ffb400;
}
.masonry-column:nth-child(2) .masonry-item:nth-child(2) .categ {
  color: #6c00ff;
}
.masonry-column:nth-child(2) .masonry-item:nth-child(3) .categ {
  color: #ff4772;
}
.masonry-column:nth-child(2) .masonry-item:nth-child(4) .categ {
  color: #f265ff;
}

.masonry-column:nth-child(3) .masonry-item:nth-child(1) .categ {
  color: #ff4772;
}
.masonry-column:nth-child(3) .masonry-item:nth-child(2) .categ {
  color: #a7ffed;
}
.masonry-column:nth-child(3) .masonry-item:nth-child(3) .categ {
  color: #f265ff;
}
.masonry-column:nth-child(3) .masonry-item:nth-child(4) .categ {
  color: #ffb400;
}

.masonry-column:nth-child(4) .masonry-item:nth-child(1) .categ {
  color: #f265ff;
}
.masonry-column:nth-child(4) .masonry-item:nth-child(2) .categ {
  color: #ffb400;
}
.masonry-column:nth-child(4) .masonry-item:nth-child(3) .categ {
  color: #3a5aff;
}
.masonry-column:nth-child(4) .masonry-item:nth-child(4) .categ {
  color: #ffe746;
}
</style>