import 'amfe-flexible'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ant from './utils/ant'
import 'vant/lib/index.css' // 全局引入样式

createApp(App).use(router).use(store).use(ant).mount('#app')
