import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import NotFoundView from '../views/not-found/NotFoundView.vue'
import CompanyView from '../views/company/CompanyView.vue'
import CompanyMenuView from '../views/company/CompanyMenuView.vue'
import CompanyCartView from '../views/company/CompanyCartView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/company/:companyId',
    name: 'company',
    component: CompanyView,
    children: [
      {
        path: '',
        name: 'companyMenu',
        component: CompanyMenuView
      },
      {
        path: 'cart',
        name: 'companyCart',
        component: CompanyCartView
      }
    ]
  },
  {
    path: '/:notFound(.*)',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
