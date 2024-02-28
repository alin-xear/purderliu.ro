import { ref } from "vue"
import { projectFirestore } from "../firebase/config"

const getProject = (id) => {
  const project = ref(null)
  const error = ref(null)
  const load = async () => {
    try {
      let res = await projectFirestore.collection('projects').doc(id).get()

      if (!res.exists) {
        throw Error('That project does not exist')
      }
      project.value = { ...res.data(), id: res.id }
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { project, error, load }
}

export default getProject