import { Module, MutationTree, ActionTree, ActionContext } from 'vuex'

type NotificationType = 'info' | 'success' | 'warning'

type StoredNotification = {
  id: string;
  message: string;
  link?: string | undefined;
  type: NotificationType;
}

type IncomingNotification = {
  message: string;
  link?: string | undefined;
  type: NotificationType;
}

type NotificationsModuleState = {
  notifications: StoredNotification[]
}

const mutations = <MutationTree<NotificationsModuleState>>{
  notify: (state: NotificationsModuleState, payload: { notification: IncomingNotification}): void => {
    const id = (new Date()).getTime().toString()
    state.notifications.push({
      ...payload.notification,
      id
    })

    setTimeout(() => {
      const index = state.notifications.findIndex(n => n.id === id)
      state.notifications.splice(index, 1)
    }, 4000)
  }
}

const actions = <ActionTree<NotificationsModuleState, unknown>>{
  notify: (context: ActionContext<NotificationsModuleState, NotificationsModuleState>, { value }): void => {
    context.commit('notify', value)
  }
}

const notificationsModule: Module<NotificationsModuleState, unknown> = {
  namespaced: true,
  state: { notifications: [] },
  mutations,
  actions
}

export default notificationsModule
