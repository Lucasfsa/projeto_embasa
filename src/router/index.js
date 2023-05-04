import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import Recovery from '../views/RecoveryView.vue'
import Password from '../views/SuccessPasswordView.vue'
import Index from '../views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/recovery',
      name: 'recovery',
      component: Recovery
    },
    {
      path: '/success-password',
      name: 'password',
      component: Password
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})

export default router
