import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/Home.vue';
import LoginPage from '@/components/Login.vue'
import TestPage from '@/components/Test.vue'
import HistoricPage from '@/components/Historique.vue';
import DescP from '@/components/Description.vue';
import Finquiz from '@/components/Finquiz.vue';
import Pages_5 from '@/components/Pages5.vue';
import Pages_6 from '@/components/Pages6.vue';
import Score from '@/components/score.vue';
import Quiz from '@/components/Quiz.vue';

const routes = [
  { path: '/', name: 'TestPage', component: TestPage },
  { path: '/accueil', name: 'HomePage', component: HomePage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/historic', name: 'HistoricPage', component: HistoricPage},
  { path: '/descrip', name: 'DescP', component: DescP},
  { path: '/finquiz', name: 'FinQuiz', component: Finquiz},
  { path: '/page5', name: 'Page_5', component: Pages_5},
  { path: '/page6', name: 'Page_6', component: Pages_6},
  { path: '/score', name: 'Score_', component: Score},
  { path: '/quiz', name: 'quiz_', component: Quiz},

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
