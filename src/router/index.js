import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Question from "../components/Question.vue";
import Result from "../components/Result.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { 
      path: "/", 
      component: Home 
    },
    {
      path: "/question/",
      component: Question,
      props: true,
    },
    { 
      path: "/result", 
      component: Result 
    },
    { 
      path: "*", 
      component: NotFound 
    }
  ]
});
