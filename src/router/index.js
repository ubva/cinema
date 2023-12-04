import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {path:'/', name:'Home', component: Home},
  {path:'/movie', name:'Movie', component: ()=>import ('../views/Movie.vue')},
  {path:'/tv', name:'Tv', component: ()=>import ('../views/Tv.vue')},
  {path:'/search', name:'Search', component: ()=>import ('../views/Search.vue')},
  ]
})

export default router
