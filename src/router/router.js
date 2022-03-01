import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import Aboutme from '@/pages/components/Aboutme.vue'
import Contact from '@/pages/components/Contact.vue';
import Blog from '@/pages/components/Blog.vue';
import Portfolio from '@/pages/components/Portfolio.vue';
import Login from '@/pages/Login.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/about-me', component: Aboutme },
  { path: '/contact', component: Contact },
  { path: '/blog', component: Blog },
  { path: '/portfolio', component: Portfolio },
  { path: '/login', component: Login },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router
