import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/view/Index.vue'
import NotFound from '@/view/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'catch-all',
      component: NotFound,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
