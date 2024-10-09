import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue';
import DetailPage from '../components/DetailPage.vue';
const routes = [
  { path: '/', component: Home },
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