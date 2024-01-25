import { createStore } from 'vuex'
import CompanyModule from './CompanyModule'
import DumbModule from './DumbModule'

export default createStore({
  modules: {
    company: CompanyModule,
    dumb: DumbModule
  }
})
