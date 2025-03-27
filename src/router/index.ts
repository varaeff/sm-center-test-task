import { createRouter, createWebHistory } from 'vue-router'
import ExampleOne from '../views/ExampleOne.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'example1',
      component: ExampleOne,
    },
    {
      path: '/example2',
      name: 'example2',
      component: () => import('../views/ExampleTwo.vue'),
    },
    {
      path: '/example3',
      name: 'example3',
      component: () => import('../views/ExampleThree.vue'),
    },
  ],
})

export default router
