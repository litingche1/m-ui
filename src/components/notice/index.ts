import {App} from 'vue'
import notice from './src/index.vue'
export default{
    install(app:App){
        app.component('m-notice',notice)
    }
}