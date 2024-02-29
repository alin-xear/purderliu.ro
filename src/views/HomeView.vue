
<template>
  <MainHeader />
  <ProjectList :projects=projects :error=error />



</template>


<script>
import MainHeader from "../components/MainHeader.vue";
import ProjectList from "../components/ProjectList.vue";
import getProjects from "../composables/getProjects";

export default {
  components: { MainHeader, ProjectList },
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