import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import router  from './router';
import axios from 'axios';

const app = createApp(App);

//axios Vue 전역객체에 등록
app.config.globalProperties.$axios = axios;
app.use(store).use(router).mount('#app');

