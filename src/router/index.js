import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/Home.vue';
import LoginPage from '@/components/Login.vue'
import ReglePage from '@/components/Regle.vue';
import TestPage from '@/components/Test.vue'
import HistoricPage from '@/components/Historique.vue';
import QuizDetails from '@/components/QuizDetails.vue';
import Finquiz from '@/components/Finquiz.vue';
import Pages_6 from '@/components/Pages6.vue';
import Score from '@/components/score.vue';
import QuizzPage from '@/components/Quizz.vue';

const routes = [
  { path: '/', name: 'TestPage', component: TestPage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/accueil', name: 'HomePage', component: HomePage },
  { path: '/detail', name: 'QuizDetails', component: QuizDetails},
  { path: '/historic', name: 'HistoricPage', component: HistoricPage},
  { path: '/finquiz', name: 'FinQuiz', component: Finquiz},
  { path: '/regle', name: 'ReglePage', component: ReglePage},
  { path: '/page6', name: 'Page_6', component: Pages_6},
  { path: '/score', name: 'Score_', component: Score},
  { path: '/quizz', name: 'QuizzPage', component: QuizzPage},

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
