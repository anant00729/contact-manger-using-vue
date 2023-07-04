import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const app = createApp(App);
app.use(router);
app.mount('#app');
