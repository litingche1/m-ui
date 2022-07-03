import{App} from 'vue'
import chooseIcon from './chooseIcon'
import chooseCity from './chooseCity'
import trend from './trend'
import notice from './notice'
import list from './list'
import menu from './menu'
import progress from './progress'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import area from './chooseCitys'
import form from './form'
import formDialog from './m-form'
import table from './table'
import calendar from './calendar'
import './styles/base.scss'
import './styles/ui.scss'
const components=[
    chooseIcon,
    chooseCity,
    trend,
    notice,
    list,
    menu,
    progress,
    chooseTime,
    chooseDate,
    area,
    form,
    formDialog,
    table,
    calendar
]
export default {
    install(app:App){
        components.map(item=>{
            app.use(item)
        })
    }
}
