import isMobile from 'is-mobile';
import type { App } from 'vue';

export default {
install: (app:App<Element>) => {
    app.config.globalProperties.$isMobile = isMobile;
},
};