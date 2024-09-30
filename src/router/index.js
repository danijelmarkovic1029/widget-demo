import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue';
import Properties from '../components/PropertiesPage.vue';
import Apartments from '../components/ApartmentPage.vue';
import Contact from '../components/ContactPage.vue';
import DetailPage from '../components/DetailPage.vue';
import ApartmentDetail from '../components/ApartmentDetail.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/properties', component: Properties },
  { path: '/apartments', component: Apartments },
  { path: '/contact', component: Contact },
  {
    path: '/details/:title',
    name: 'detail-page',
    component: DetailPage,
    props: (route) => ({
      title: route.params.title,
      subtitle: route.query.subtitle,
      image: route.query.image,
      price: route.query.price,
      description: route.query.description
    }),
  },
  {
    path: '/apartments/:title',
    name: 'apartment-detail',
    component: ApartmentDetail,
    props: (route) => ({
      title: route.params.title,
      price: route.query.price,
      imageSrc: route.query.imageSrc,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;