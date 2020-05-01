import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import Question from "@/components/Question.vue";
import Result from "@/components/Result.vue";
import NotFound from "@/components/NotFound.vue";
import Signup from "@/components/auth/Signup.vue";
import Login from "@/components/auth/login.vue"

import firebase from 'firebase'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { 
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      } 
    },
    { 
      path: '/question/:category',
      name: 'Question',
      component: Question,
      props: true,
      meta: {
        requiresAuth: true
      } 
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    { 
      path: "/result", 
      component: Result 
    },
    { 
      path: "*", 
      component: NotFound 
    },
    {
      path: "/myfirst-app-vuejs",
      component: Home,
      meta: {
        requiresAuth: true
      }
    }
  ]
});


router.beforeEach((to, from, next) => {
  // check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)) {
    //check auth state of user
    let user = firebase.auth().currentUser
    if(user){
      // user signed in, process to road
      next()
    } else if(!user) {
      // no user signed in, redirect to login
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router;