// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { Screens } from '../../models/types';

const routes = [
  {
    path: '/',
    component: () => import('@/App.vue'),
    children: [
      {
        path: '/',
        name: Screens.Home,
        component: () => import('@/views/home/Home.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
