import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseIconButton from './views/shared/BaseIconButton.vue'
import BaseButton from './views/shared/BaseButton.vue'
import ThemeTogglerIconButton from './views/shared/ThemeTogglerIconButton.vue'
import Skeleton from './views/shared/Skeleton.vue'
import NotificationList from './views/shared/NotificationList.vue'
import NotificationCard from './views/shared/NotificationCard.vue'
import BaseModal from './views/shared/BaseModal.vue'
import GenericHeader from '@/views/shared/GenericHeader.vue'
import GenericFooter from '@/views/shared/GenericFooter.vue'

const app = createApp(App)

app.use(store)
app.use(router)

app.component('BaseIconButton', BaseIconButton)
app.component('BaseButton', BaseButton)
app.component('ThemeTogglerIconButton', ThemeTogglerIconButton)
app.component('Skeleton', Skeleton)
app.component('NotificationList', NotificationList)
app.component('NotificationCard', NotificationCard)
app.component('BaseModal', BaseModal)
app.component('GenericHeader', GenericHeader)
app.component('GenericFooter', GenericFooter)

app.mount('#app')
