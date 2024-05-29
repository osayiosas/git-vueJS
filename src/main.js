import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { VueQueryPlugin } from "vue-query";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
   
    faGlobeAfrica,
    faLink,
    faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import Root from "./view/Root.vue";
import RepoList from "./view/RepoList.vue";
import ErrorBoundaryTest from "./view/ErrorBoundaryTest.vue";
import SingleRepo from "./view/SingleRepo.vue";
import ErrorPage from "./view/ErrorPage.vue";

import "./style.css";

import { MotionPlugin } from "@vueuse/motion";



library.add( faGlobeAfrica, faLink, faList,);

const routes = [
  { path: "/", component: Root },
  { path: "/repo-list", component: RepoList },
  { path: "/repo-list/:repoId", component: SingleRepo },
  { path: "/error-boundary-test", component: ErrorBoundaryTest },
  { path: "/:pathMatch(.*)*", component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.config.errorHandler = (err, vm, info) => {
  // This is a global error handler to catch errors
  // You can handle logging here if needed
  console.error(err, vm, info);
};
app.use(router);
app.use(VueQueryPlugin);
app.use(MotionPlugin);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
