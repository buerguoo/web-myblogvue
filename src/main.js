// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import store from './store'
import 'element-ui/lib/theme-default/index.css'
import mavonEditor from 'mavon-editor'
import  VueResource  from 'vue-resource'
import axios from 'axios'

import './assets/css/style.less'
import 'mavon-editor/dist/css/index.css'

Vue.prototype.$axios = axios 
Vue.use(mavonEditor)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
