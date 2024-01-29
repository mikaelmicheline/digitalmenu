import { createStore } from 'vuex'
import CompanyModule from './CompanyModule'
import ProductModule from './ProductModule'
import NotificationsModule from './NotificationsModule'

export default createStore({
  modules: {
    company: CompanyModule,
    product: ProductModule,
    notifications: NotificationsModule
  }
})
