<template>
  <div class="container loginWrap">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="handleCreate">
          <input type="text" v-model="title" placeholder="Title" required />
          <input
            type="text"
            v-model="location"
            placeholder="Location"
            required
          />
          <input type="text" v-model="status" placeholder="Status" required />
          <input type="text" v-model="url" placeholder="Live url" required />
          <input
            type="text"
            v-model="tempTag"
            placeholder="Input tag and press enter"
            @keydown.enter.prevent="addTag"
          />
          <p>
            Current tags
            <small class="fst-italic">(click item to remove)</small>:
            <br>
            <span class="tag" v-for="tag in tags" :key="tag" @click="removeTag">
              {{ tag }}
            </span>
          </p>
          <input
            type="text"
            v-model="tempImg"
            placeholder="Input image url and press enter"
            @keydown.enter.prevent="addImage"
          />
          <p>
            Current images
            <small class="fst-italic">(click item to remove)</small>:
            <br>
            <span
              class="tag"
              v-for="image in images"
              :key="image"
              @click="removeImage()"
            >
              {{ image }} <br>
            </span>
          </p>

          <button type="submit">Add project</button>
          <br />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore, timestamp } from "@/firebase/config";

export default {
  setup(props, context) {
    const title = ref("");
    const location = ref("");
    const status = ref("");
    const url = ref("");
    const tags = ref([]);
    const images = ref([]);
    const tempTag = ref("");
    const tempImg = ref("");

    const handleCreate = async () => {
      const newProject = {
        title: title.value,
        location: location.value,
        url: url.value,
        status: status.value,
        tags: tags.value,
        images: images.value,
        created_at: timestamp(),
      };

      await projectFirestore.collection("projects").add(newProject);

      alert("Successfully added project")
      
window.location.href = window.location.href;

    };

    const addImage = () => {
      if (!images.value.includes(tempImg.value) && tempImg.value != "") {
        images.value.push(tempImg.value);
      }
      tempImg.value = "";
    };

    const addTag = () => {
      if (!tags.value.includes(tempTag.value) && tempTag.value != "") {
        tags.value.push(tempTag.value);
      }
      tempTag.value = "";
    };

    const removeTag = (e) => {
      let index = tags.value.indexOf(e.target.innerText);
      tags.value.splice(index, 1)
    };

    const removeImage = () => {
      let index = images.value.indexOf(event.target.innerText.replace(/\s/, ""));
      images.value.splice(index, 1)
    };

    return {
      title,
      location,
      status,
      url,
      tempTag,
      tempImg,
      tags,
      images,
      handleCreate,
      addImage,
      addTag,
      removeTag,
      removeImage,
    };
  },
};
</script>

<style scoped>
input {
  margin-bottom: 30px;
}
.tag {
  display: inline-block;
  background-color: white;
  color: black;
  padding: 0 12px;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 10px;
}
</style>