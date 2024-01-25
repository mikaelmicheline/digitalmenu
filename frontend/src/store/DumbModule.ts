import { Module, GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex'

const getters = <GetterTree<{ value: number }, unknown>>{
  getValue: (state: { value: number }) => (): string => {
    return state.value.toString()
  }
}

const mutations = <MutationTree<{ value: number }>>{
  increase: (state: { value: number }, payload: { value: number}): void => {
    console.log('mutation', state, payload, state)
    state.value += payload.value
    console.log('end', state)
  }
}

const actions = <ActionTree<{ value: number }, unknown>>{
  increase: (context: ActionContext<{ value: number }, { value: number }>, { value }): void => {
    context.commit('increase', value)
  }
}

const dumbModule: Module<{ value: number }, unknown> = {
  namespaced: true,
  state: { value: 0 },
  getters,
  mutations,
  actions
}

export default dumbModule
