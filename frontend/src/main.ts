import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
//import "@/assets/main.css"
import "@/assets/main.scss"

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: {
        message: {
          appName: 'QtoR - File transfer',
          footer: {
            authoring: 'by Adrian Rambal',
            sourceCodeLicensed: 'The source code is licensed',
            websiteLicensed:'The website content is licensed'
          }
        }
      }
    }
  })
const app = createApp(App)

import router from './router'
app.use(router)

app.use(i18n)

app.mount('#app')
