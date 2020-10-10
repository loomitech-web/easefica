import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import * as firebase from "firebase/app";
import "firebase/analytics";

// check version
//import axios from 'axios';
//let version = "2.1";

/*axios.get('https://odata.easefica.co.za/easefica/easefica/Versions(www.easefica.co.za)').then((response)=>{
            if(response.data) {
              if(response.data.value && response.data.value.length) {
                if(response.data.value[0].version != version) {
                  console.log('version mismatch... reloading');
                  location.reload();
                  return;
                } else {
                  console.log('version mismatch... continue');
                  return;
                }
              }
            }
            console.log('could not access version information.. using stale content');
          })
*/
Vue.config.productionTip = false;

let firebaseConfig = {
  apiKey: "AIzaSyARie9FDNkOCehbvtmPWbGJkgsA_R74KO0",
  authDomain: "easefica-staging.firebaseapp.com",
  databaseURL: "https://easefica-staging.firebaseio.com",
  projectId: "easefica-staging",
  storageBucket: "easefica-staging.appspot.com",
  messagingSenderId: "398186938494",
  appId: "1:398186938494:web:4a40f56a84382e2c99182f",
  measurementId: "G-KH0TW00R4E"
};

firebase.initializeApp(firebaseConfig);

Vue.prototype.$analytics = firebase.analytics();
Vue.prototype.$analytics.logEvent('app_start');

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')



