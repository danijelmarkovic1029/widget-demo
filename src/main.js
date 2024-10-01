import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import 'vuetify/styles';
import store from './store';
import '@mdi/font/css/materialdesignicons.css';

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app');