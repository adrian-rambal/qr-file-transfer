import { createApp } from 'vue'
import App from './App.vue'
//import "@/assets/main.css"
import "@/assets/main.scss"

const app = createApp(App)

import router from './router'
app.use(router)

app.mount('#app')
