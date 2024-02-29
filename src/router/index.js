import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import firebase from 'firebase/compat/app';

const requireAuth = (to, from, next) => {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      next({ name: 'login' })
    } else {
      next()
    }
  })
}

const allreadyAuthentificated = (to, from, next) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      next({ name: 'home' })
    }else{
      next()
    }
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogIn.vue'),
      beforeEnter: allreadyAuthentificated

    },
    {
      path: '/add-project',
      name: 'AddProject',
      component: () => import('../views/AddProject.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/projects/:id',
      name: 'Projects',
      component: () => import('../views/ProjectView.vue'),
      props: true
    },
  ]
})

export default router
