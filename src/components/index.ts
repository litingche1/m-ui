import{App} from 'vue'
import chooseIcon from './chooseIcon'
import chooseCity from './chooseCity'
import trend from './trend'
import notice from './notice'
import list from './list'
import menu from './menu'
const components=[
    chooseIcon,
    chooseCity,
    trend,
    notice,
    list,
    menu,
]
export default {
    install(app:App){
        components.map(item=>{
            app.use(item)
        })
    }
}