import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getProjects = () => {
  const projects = ref([])
  const error = ref(null)
  const load = async () => {
    try {
      const res = await projectFirestore.collection('projects')
      .orderBy('created_at', 'desc')
      .get()

      if(!res.size > 0 ){
        throw Error('There are no projects here')
      }
      projects.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
    }
    catch (err) {
      error.value = err.message
    }
  }

  return { projects, error, load }
}

export default getProjects



