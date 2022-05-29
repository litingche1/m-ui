import{App} from 'vue'
import chooseIcon from './chooseIcon'
import chooseCity from './chooseCity'
import trend from './trend'
const components=[
    chooseIcon,
    chooseCity,
    trend
]
export default {
    install(app:App){
        components.map(item=>{
            app.use(item)
        })
    }
}