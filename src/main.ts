import { createApp } from 'vue'
import './assets/styles/index.scss'
import App from './App.vue'
import router from "./router/index";
import { setupStore } from '@/store';
import Icons from './element-plus/icons'

const app = createApp(App);
setupStore(app)
app.use(router);
app.use(Icons);
app.mount("#app");
