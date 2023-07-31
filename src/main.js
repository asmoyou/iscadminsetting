import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import router from "@/router/router";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

const app = createApp(App)
app.use(router)
app.use(autoAnimatePlugin)
app.use(Antd).mount('#app')
