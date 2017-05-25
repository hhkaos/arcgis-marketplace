import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../layout.vue'], resolve),
      children: [
        {
          path: '',
          component: resolve => require(['../components/products.vue'], resolve),
          meta: {
            title: 'Hola mundo'
          }
        }
      ]
    }
  ]
})
