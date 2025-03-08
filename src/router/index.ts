import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ModalView from '../views/ModalView.vue';

const routes = [
  { path: '/', component: HomeView, name: 'home' },
  { path: '/about', component: AboutView, name: 'about' },
  { path: '/modalView', component: ModalView, name: 'modal' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
