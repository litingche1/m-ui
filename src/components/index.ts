import{App} from 'vue'
import chooseIcon from './chooseIcon'
import chooseCity from './chooseCity'
import trend from './trend'
import notice from './notice'
import list from './list'
import menu from './menu'
import progress from './progress'
import chooseTime from './chooseTime'
const components=[
    chooseIcon,
    chooseCity,
    trend,
    notice,
    list,
    menu,
    progress,
    chooseTime
]
export default {
    install(app:App){
        components.map(item=>{
            app.use(item)
        })
    }
}