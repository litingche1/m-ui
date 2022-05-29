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
            },
            {
                path:'/iconPicker',// 图标选择器组件
                component:()=>import('../views/iconPicker/index.vue')
            },
            {
                path:'/cityComponent',// 城市三级联动组件
                component:()=>import('../views/city/index.vue')
            },
            {
                path:'/trend',// 趋势标记
                component:()=>import('../views/trend/index.vue')
            },
        ]
    }

]

const router=createRouter({
    routes,
    history:createWebHashHistory()
})

export default router