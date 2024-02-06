import { createStore } from 'vuex'
import CompanyModule from './CompanyModule'
import ProductModule from './ProductModule'
import NotificationsModule from './NotificationsModule'
import CartModule from './CartModule'

export default createStore({
  modules: {
    company: CompanyModule,
    product: ProductModule,
    notifications: NotificationsModule,
    cart: CartModule
  }
})
