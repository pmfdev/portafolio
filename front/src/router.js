import { createRouter, createWebHistory } from 'vue-router';
import LayoutMain from './layouts/LayoutMain.vue';
import HomePage from './pages/HomePage.vue';




const routes = [
  {
    path: '/',
    redirect: '/home',
    component: LayoutMain,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: HomePage
      },
      {
        path: '/cv',
        name: 'CV',
        component: () => import('./pages/CvPage.vue')
      } ,
      {
        path: '/earth',
        name: 'Earth',
        component: () => import('./pages/EarthPage.vue')
      }
      ,
      {
        path: '/mars',
        name: 'Mars',
        component: () => import('./pages/MarsPage.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
