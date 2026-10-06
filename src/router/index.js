import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/shop', name: 'shop', component: () => import('@/views/ShopView.vue') },
    {
      path: '/shop/:slug',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
      props: true,
    },
    { path: '/garage', name: 'garage', component: () => import('@/views/GarageView.vue') },
    { path: '/custom', name: 'custom', component: () => import('@/views/CustomView.vue') },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  },
})

export default router
