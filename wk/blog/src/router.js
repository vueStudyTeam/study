import { createWebHistory, createRouter } from "vue-router";
import list from "./components/List.vue";
import home from "./components/Home.vue";
import detail from "./components/Detail.vue";
import author from "./components/Author.vue";
import comment from "./components/Comment.vue";
const routes = [
  {
    path: "/list",
    component: list,
  },
  {
    path: "/home",
    component: home,
  },
  {
    path: "/detail/:id",
    component: detail,
    children: [
        {
            path : "author",
        component : author
        },
        {
            path : "comment",
        component : comment
        }
    ]
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 