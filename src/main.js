// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource-2'
import Vue2Filters from 'vue2-filters'
import VueFilter from 'vue-filter'
import Helpers from './helpers.js'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vue2Filters)
Vue.use(VueFilter)
Vue.use(Helpers)

Vue.http.options.xhr = {
  withCredentials: true
}

var routes = [
  {
    path: '/',
    component: resolve => require(['./layout.vue'], resolve),
    children: [
      {
        path: '',
        component: resolve => require(['./components/products.vue'], resolve)
      },
      {
        name: 'product',
        path: 'product/:id',
        component: resolve => require(['./components/product.vue'], resolve)
      },
      {
        name: 'buy',
        path: 'buy/:id',
        component: resolve => require(['./components/buy.vue'], resolve)
      },
      {
        name: 'about',
        path: 'about',
        component: resolve => require(['./components/about.vue'], resolve)
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

export default {
  router
}
