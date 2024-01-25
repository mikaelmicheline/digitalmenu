import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import DisplayView from '../views/display/DisplayView.vue'
import NotFoundView from '../views/not-found/NotFoundView.vue'
import CompanyView from '../views/company/CompanyView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/display',
    name: 'display',
    component: DisplayView
  },
  {
    path: '/company/:companyId',
    name: 'company',
    component: CompanyView
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
