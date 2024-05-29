// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Root from "../view/Root.vue";
import ErrorPage from "../view/ErrorPage.vue";
import RepoList from "../view/RepoList.vue";
import SingleRepo from "../view/SingleRepo.vue";
import ErrorBoundaryTest from "../view/ErrorBoundaryTest.vue";

const routes = [
  {
    path: "/",
    component: Root,
    alias: "/home",
    meta: { title: "Home" },
  },
  {
    path: "/repo-list",
    component: RepoList,
    meta: { title: "Repository List" },
    children: [
      {
        path: ":repoId",
        component: SingleRepo,
        meta: { title: "Single Repository" },
      },
    ],
  },
  {
    path: "/error-boundary-test",
    component: ErrorBoundaryTest,
    meta: { title: "Error Boundary Test" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
    meta: { title: "Error Page" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
