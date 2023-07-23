import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import vOutsideClick from './customDirectives/vOutsideClick'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.directive('outside-click', vOutsideClick)
app.mount('#app')