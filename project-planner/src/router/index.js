import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/homePage',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/addProject',
    name: 'AddProject',
    component: () => import('../views/AddProject.vue')
  },
  {
    path: '/project/:id',
    name: 'EditProject',
    component: () => import('../views/EditProject.vue'),
    props : true
  },
  {
    path: '/addPerson',
    name: 'AddPerson',
    component: () => import('../views/AddPerson.vue')
  },
  {
    path: '/persons',
    name: 'Persons',
    component: () => import('../views/Persons.vue')
  },
  {
    path: '/editpersons/:id',
    name: 'EditPersons',
    component: () => import('../views/EditPersons.vue'),
    props : true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
