import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ThemeToggler from './views/shared/ThemeToggler.vue'
import Skeleton from './views/shared/Skeleton.vue'

const app = createApp(App)

app.use(store)
app.use(router)

app.component('ThemeToggler', ThemeToggler)
app.component('Skeleton', Skeleton)

app.mount('#app')
