import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/Home.vue';
import LoginPage from '@/components/Login.vue'

const routes = [
  { path: '/', name: 'LoginPage', component: LoginPage },
  { path: '/accueil', name: 'HomePage', component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
