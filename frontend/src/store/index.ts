import { createStore } from 'vuex'
import CompanyModule from './CompanyModule'
import NotificationsModule from './NotificationsModule'

export default createStore({
  modules: {
    company: CompanyModule,
    notifications: NotificationsModule
  }
})
