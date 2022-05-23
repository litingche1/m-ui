import{createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router";
import Home from '../views/Home.vue'
import container from '../components/container/src/index.vue'
const routes:RouteRecordRaw[]=[
    {
        path:'/',
        component:container,
        children:[
            {
                path:'/',
                component:Home
            }
        ]
    }

]

const router=createRouter({
    routes,
    history:createWebHashHistory()
})

export default router