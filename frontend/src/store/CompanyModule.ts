import CompanyModel from '@/models/CompanyModel'
import { diffMinutes } from '@/utils/dateUtils'
import { Module, GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex'

type CompanyModuleState = {
  company: CompanyModel | undefined
}

const getters = <GetterTree<CompanyModuleState, unknown>>{
  getCompany: (state: CompanyModuleState) => (companyId: string): CompanyModel | undefined => {
    if (state && state.company?.companyId === companyId) {
      const minutesPassedSinceCompanyWasFetched = diffMinutes(state.company.fetchedAt, new Date())
      if (minutesPassedSinceCompanyWasFetched < 0) return state.company
    }
  }
}

const mutations = <MutationTree<CompanyModuleState>>{
  setCompany: (state: CompanyModuleState, payload: { company: CompanyModel }): void => {
    state.company = payload.company
  }
}

const actions = <ActionTree<CompanyModuleState, unknown>>{
  setCompany: (context: ActionContext<CompanyModuleState, CompanyModuleState>, { value }): void => {
    context.commit('setCompany', value)
  }
}

const companyModule: Module<CompanyModuleState, unknown> = {
  namespaced: true,
  state: { company: undefined },
  getters,
  mutations,
  actions
}

export default companyModule
