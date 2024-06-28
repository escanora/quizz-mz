import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/Home.vue';
import LoginPage from '@/components/Login.vue'
import TestPage from '@/components/Test.vue'

const routes = [
  { path: '/', name: 'TestPage', component: TestPage },
  { path: '/accueil', name: 'HomePage', component: HomePage },
  { path: '/login', name: 'LoginPage', component: LoginPage },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
