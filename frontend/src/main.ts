import { createApp } from 'vue'
import App from './App.vue'
//import "@/assets/main.css"
import "@/assets/main.scss"


const app = createApp(App)

// Configuration
import router from './router'
function configRouter() {
  app.use(router)
}

import { createI18n } from 'vue-i18n'
function configi18n() {
  const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: {
        message: {
          component:{
            fileUpload: {
              hint: 'Choose file...'
            }
          },
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
  app.use(i18n)
}





// End configuration



configRouter();
configi18n();

import MobileDetectionPlugin from './plugin/MobileDetection';
import type FileUpload from './components/FileUpload.vue'
app.use(MobileDetectionPlugin);

app.mount('#app')






