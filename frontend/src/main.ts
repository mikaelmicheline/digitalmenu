import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseIconButton from './views/shared/BaseIconButton.vue'
import ThemeTogglerButton from './views/shared/ThemeTogglerButton.vue'
import Skeleton from './views/shared/Skeleton.vue'
import NotificationList from './views/shared/NotificationList.vue'
import NotificationCard from './views/shared/NotificationCard.vue'
import BaseModal from './views/shared/BaseModal.vue'

const app = createApp(App)

app.use(store)
app.use(router)

app.component('BaseIconButton', BaseIconButton)
app.component('ThemeTogglerButton', ThemeTogglerButton)
app.component('Skeleton', Skeleton)
app.component('NotificationList', NotificationList)
app.component('NotificationCard', NotificationCard)
app.component('BaseModal', BaseModal)

app.mount('#app')
