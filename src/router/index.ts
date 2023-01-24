import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import main from '@/layout/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    name: 'main',
    component: main,
    children: [
      {
        path: '',
        name: 'cashier',
        component: () => import('../views/cashier/index.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/order/index.vue')
      },
    ]
  },
]
const router = createRouter({
  // history: createWebHistory(),    // 使用history模式
  history: createWebHashHistory(),	 // 使用hash模式
  routes
})
export default router
