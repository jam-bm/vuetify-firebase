import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify/lib'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'
import DateFilter from './filters/date'

import * as firebase from 'firebase'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDXbA7pnDsio3IjvkbcPd6OZiWNCPw_wDg',
      authDomain: 'image-url-a598a.firebaseapp.com',
      databaseURL: 'https://image-url-a598a.firebaseio.com',
      projectId: 'image-url-a598a',
      storageBucket: '',
      appId: '1:995673600918:web:939aed19861c52db'
    })
  }
}).$mount('#app')
