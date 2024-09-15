import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Employee from '../views/Employee/Employee.vue'
import Main from '../views/Main/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [ 
        {
          path: '/',
          name: 'main',
          component: Main
        },
        {
          path: '/employee',
          name: 'employee',
          component: Employee
        }
      ]
    }
  ]
})

export default router
