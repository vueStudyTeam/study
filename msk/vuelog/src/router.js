import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Main from './components/Main.vue';
import Detail from './components/Detail.vue';

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Main
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
    children: [
        {path: 'author', component: 'Author'}
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 