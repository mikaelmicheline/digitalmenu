import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import NotFoundView from '../views/not-found/NotFoundView.vue'
import CompanyView from '../views/company/CompanyView.vue'
import CompanyMenuView from '../views/company/CompanyMenuView.vue'
import CompanyCartView from '../views/company/CompanyCartView.vue'
import CompanyProductView from '../views/company/CompanyProductView.vue'
import CompanyInfoView from '../views/company/CompanyInfoView.vue'
import CookieNoticeView from '../views/cookie-notice/CookieNoticeView.vue'
import PrivacyNoticeView from '../views/privacy-notice/PrivacyNoticeView.vue'

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
      },
      {
        path: 'info',
        name: 'companyInfo',
        component: CompanyInfoView
      },
      {
        path: 'product/:productId',
        name: 'companyProduct',
        component: CompanyProductView
      }
    ]
  },
  {
    path: '/cookie',
    name: 'cookie',
    component: CookieNoticeView
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyNoticeView
  },
  {
    path: '/:notFound(.*)',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0, behavior: 'smooth' })
      }, 200)
    })
  },
  routes
})

export default router
