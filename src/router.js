import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('@/views/Home'),
        footer: Footer
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: () => import('@/views/Kind'),
        footer: Footer
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: () => import('@/views/Cart'),
        footer: Footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/User'),
        footer: Footer
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
