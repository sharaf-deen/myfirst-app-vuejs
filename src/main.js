// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index"
import firebase from 'firebase'
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert)


Vue.config.productionTip = false

let app = null;

// wait for firebase auth to init before creating the app
firebase.auth().onAuthStateChanged((user) => {

  // init app if not already created
  if(!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    })
  }
  

})

/* eslint-disable no-new */
