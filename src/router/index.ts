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
                path:'/chooseIcon',// 图标选择器组件
                component:()=>import('../views/iconPicker/index.vue')
            },
            {
                path:'/chooseArea',// 城市三级联动组件
                component:()=>import('../views/city/index.vue')
            },
            {
                path:'/trend',// 趋势标记
                component:()=>import('../views/trend/index.vue')
            },
            {
                path:'/notification',// 通知
                component:()=>import('../views/notification/index.vue')
            },
            {
                path:'/menu',// 导航菜单
                component:()=>import('../views/menu/index.vue')
            },
            {
                path:'/progress',// 进度条
                component:()=>import('../views/progress/index.vue')
            },
            {
                path:'/chooseTime',// 时间选择
                component:()=>import('../views/chooseTime/index.vue')
            },
            {
                path:'/chooseCity',// 城市选择器
                component:()=>import('../views/area/index.vue')
            },
            {
                path:'/form',// 表单
                component:()=>import('../views/form/index.vue')
            },
        ]
    }

]

const router=createRouter({
    routes,
    history:createWebHashHistory()
})

export default router