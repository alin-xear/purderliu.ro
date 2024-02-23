import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import firebase from 'firebase/compat/app';

const requireAuth = (to, from, next) => {
  firebase.auth().onAuthStateChanged( user =>{
    if(!user) {
      next({name: 'login'})
    }else {
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/add-project',
      name: 'AddProject',
      component: ()=> import('../views/AddProject.vue'),
      beforeEnter: requireAuth
    }
  ]
})

export default router
