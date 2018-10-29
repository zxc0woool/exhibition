import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login/login'
import Home from '@/components/pages/Home'
// import Blog from '@/components/pages/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
    // ,
    // {
    //   path: '/Blog',
    //   name: 'Blog',
    //   component: Blog
    // }
  ]
})