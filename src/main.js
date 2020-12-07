// =========================================================
// * Vuetify Material Dashboard - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import axios from './plugins/axios';

store.$axios = axios;

Vue.config.productionTip = false

new Vue({
  store,
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')

if (localStorage.user_data) {
  console.log("a7aa")
  store.state.auth.logged = true
  store.state.auth.user=JSON.parse(localStorage.user_data).user
  // auth.state.logged = true;
  // console.log(auth.state.logged)
  store.dispatch("auth/load", JSON.parse(localStorage.user_data).token);
}