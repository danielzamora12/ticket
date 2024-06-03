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
    path: '/Create',
    name: 'Crear',
    component: () => import(/* webpackChunkName: "CrearUsuarios" */ '../View/CreateView.vue')
  },
  {
    path: '/List',
    name: 'Listar',
    component: () => import(/* webpackChunkName: "ListarUsuarios" */ '../View/ListView.vue')
  },
  {
    path: '/Edit/:usuarios_id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "EditarUsuarios" */ '../View/EditView.vue')
  },
  {
    path: '/Navbar',
    name: 'Navegacion',
    component: () => import(/* webpackChunkName: "Navegacion" */ '../View/NavbarView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
