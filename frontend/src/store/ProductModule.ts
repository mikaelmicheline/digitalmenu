import CategoryWithProductsModel from '@/models/CategoryWithProductsModel'
import { Module, GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex'

type ProductModuleState = {
  companyId: string | undefined
  categories: CategoryWithProductsModel[]
}

const getters = <GetterTree<ProductModuleState, unknown>>{
  getCategoriesWithProducts: (state: ProductModuleState) => (companyId: string, category: string | undefined): CategoryWithProductsModel[] => {
    if (state.companyId !== companyId) return []
    if (!category) return state.categories

    const categoryFound = state.categories.find(c => c.category === category)
    if (categoryFound) return [categoryFound]
    return []
  }
}

const mutations = <MutationTree<ProductModuleState>>{
  setCategoriesWithProducts: (state: ProductModuleState, payload: { companyId: string, categories: CategoryWithProductsModel[] }): void => {
    state.companyId = payload.companyId
    state.categories = payload.categories
  }
}

const actions = <ActionTree<ProductModuleState, unknown>>{
  setCategoriesWithProducts: (context: ActionContext<ProductModuleState, ProductModuleState>, { value }): void => {
    context.commit('setCategoriesWithProducts', value)
  }
}

const ProductModule: Module<ProductModuleState, unknown> = {
  namespaced: true,
  state: { companyId: undefined, categories: [] },
  getters,
  mutations,
  actions
}

export default ProductModule
