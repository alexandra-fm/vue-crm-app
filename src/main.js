import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import localizeFilter from "@/filters/localize.filter";
import messagePlugin from "@/utils/message.plugin";
import Loader from "@/components/app/Loader";
import Paginate from "vuejs-paginate";
import tooltipDirective from "@/directives/tooltip.directive";
import VueMeta from "vue-meta";

import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.filter("localize", localizeFilter);
Vue.directive("tooltip", tooltipDirective);
Vue.component("Loader", Loader);
Vue.component("Paginate", Paginate);

firebase.initializeApp({
  apiKey: "AIzaSyBMga8T9kj7tqjxVYWYq3bdAzWOcCZxloo",
  authDomain: "vue-crm-pr.firebaseapp.com",
  projectId: "vue-crm-pr",
  storageBucket: "vue-crm-pr.appspot.com",
  messagingSenderId: "513267068183",
  appId: "1:513267068183:web:3336bcf0761f44a84d5b52",
  measurementId: "G-17KYS1465E",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
