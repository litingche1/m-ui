import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import mUI from './components/index'
import './mock'
import {toLine} from "./units";
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // console.log(key, component)
    app.component(`el-icon-${toLine(key)}`, component)
}
app.use(router).use(ElementPlus).use(mUI)
app.mount('#app')
