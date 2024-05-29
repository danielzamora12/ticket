import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../View/LoginView.vue')
  },
  {
    path: '/Report',
    name: 'Report',
    component: () => import(/* webpackChunkName: "Report" */ '../View/ReportView.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'ErrorPage',
    component: () => import(/* webpackChunkName: "ErrorPage" */ '../View/ErrorPageView.vue')
  },
  {
    path: '/Usuarios',
    name: 'Usuarios',
    component: () => import(/* webpackChunkName: "Report" */ '../View/CrudView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
