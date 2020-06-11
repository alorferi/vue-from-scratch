import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import HelloWorld from "./components/HelloWorld";
import Tasks from "./components/Tasks";
import TaskDetails from "./components/TaskDetails";
import NotFound from "./components/NotFound";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", component: HelloWorld },
    { path: "/tasks", component: Tasks },
    { path: "/tasks/:id", component: TaskDetails },
    { path: "*", component: NotFound },
  ],
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
