<template>
  <section>
    <div class="container px-md-5 gridImages">
      <div v-for="image in computedImages" :key="image" :class="image.type">
        <img :src="'../assets/'+image.src" class="img-fluid" />
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["images"],
  setup(props) {
    const computedImages = ref([]);

    computedImages.value = props.images.filter((image) => {
      if (image.type != "logo" && image.type != "list") {
        return true;
      }
    });

    return { computedImages };
  },
};
</script>

<style scoped>
.gridImages {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(6, 1fr);
}

.landscape {
  grid-column: span 6;
}

.square {
  grid-column: span 3;
}

img {
  width: 100%;
}

.square.small {
  grid-column: span 2;
}
</style>