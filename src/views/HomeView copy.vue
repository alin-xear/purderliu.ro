
<template>

  <MainHeader />

  <section class="projects">
    <div class="container px-md-5">
      <div v-if="error">{{ error }}</div>
      <div class="projectsWrap" v-if="projects.length">
        
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
      </div>
    </div>
  </section>

  <MainFooter />

</template>


<script>
import MainHeader from "../components/MainHeader.vue";
import MainFooter from "../components/MainFooter.vue";
import getProjects from "../composables/getProjects";

export default {
  components: { MainHeader, MainFooter },
  setup() {
    const { projects, error, load } = getProjects();

    load();

    return { projects, error };
  },
};
</script>


<style>
.projectsWrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px
}
.project:nth-child(1) .categ{
color: #a7ffed;
}
.project:nth-child(2) .categ{
color: #ffb400;
}
.project:nth-child(3) .categ{
color: #ff4772;
}
.project:nth-child(4) .categ{
color: #f265ff;
}
.project:nth-child(5) .categ{
color: #3a5aff;
}
.project:nth-child(6) .categ{
color: #3a5aff;
}
.project:nth-child(7) .categ{
color: #a7ffed;
}
.project:nth-child(8) .categ{
color: #ffb400;
}
.project:nth-child(9) .categ{
color: #ffb400;
}
.project:nth-child(10) .categ{
color: #ff4772;
}
.project:nth-child(11) .categ{
color: #f265ff;
}
.project:nth-child(12) .categ{
color: #3a5aff;
}
.project:nth-child(13) .categ{
color: #ffb400;
}
.project:nth-child(14) .categ{
color: #f265ff;
}
.project:nth-child(15) .categ{
color: #ffb400;
}
.project:nth-child(16) .categ{
color: #ffe746;
}
@media (min-width: 991px){
  .projectsWrap {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>