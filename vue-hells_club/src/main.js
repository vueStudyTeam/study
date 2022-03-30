import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import axios from 'axios';

const app = createApp(App);
app.use(store).mount('#app');

//app.config.globalProperties.$axios = axios;
