import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue';
import Properties from '../components/PropertiesPage.vue';
import About from '../components/AboutPage.vue';
import Contact from '../components/ContactPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/properties', component: Properties },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;