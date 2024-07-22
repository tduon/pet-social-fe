import { createRouter, createWebHistory } from 'vue-router'
import Middleware from "@/router/middleware"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/register',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/posts',
      component: () => import('@/views/post/PostsView.vue'),
      props: { type:'ALL' }
    },
    {
      path: '/posts/following',
      component: () => import('@/views/post/PostsView.vue'),
      props: { type:'FOLLOWING' }
    },
    {
      path: '/posts/:idPost',
      component: () => import('@/views/post/PostDetailView.vue')
    },
    {
      path: '/profile/:idUser',
      component: () => import('@/views/profile/ProfileView.vue')
    },
    {
      path: '/profile/update',
      component: () => import('@/views/profile/UpdateProfileView.vue')
    },
  ]
})

new Middleware(router)
export default router
