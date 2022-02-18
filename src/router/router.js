import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import Aboutme from '@/pages/components/Aboutme.vue'
import Contact from '@/pages/components/Contact.vue';
import Blog from '@/pages/components/Blog.vue';
import Portfolio from '@/pages/components/Portfolio.vue';
import Login from '@/pages/Login.vue';

const routes = [
  { path: '/:text', component: Main},
  { path: '/about-me/:text', component: Aboutme, alias: '/about-me' },
  { path: '/contact/:text', component: Contact },
  { path: '/blog/:text', component: Blog },
  { path: '/portfolio/:text', component: Portfolio },
  { path: '/login/:text', component: Login },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router
