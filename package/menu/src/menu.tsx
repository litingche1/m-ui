import {defineComponent,PropType, useAttrs} from 'vue'
import { menuItem } from './type'
import * as Icons from '@element-plus/icons-vue'
import './styles/index.scss'
export default defineComponent({
props:{
    // 导航菜单的数据
    data: {
        type: Array as PropType<menuItem[]>,
        required: true
    },
    // 默认选中的菜单
    defaultActive: {
        type: String,
        default: ''
    },
    // 是否是路由模式
    router: {
        type: Boolean,
        default: false
    },
},
setup(props,ctx){
    let attrs=useAttrs()
    let renderMenu=(data:any[])=>{
        return data.map(item=>{
            // 每个菜单的图标
            item.i=(Icons as any)[item.icon]
            // 处理sub-menu的插槽
            let slots = {
                title: () => {
                    return <>
                        <item.i />
                        <span>{item.name}</span>
                    </>
                }
            }
            if(item.children&&item.children.length){
                return(
                    <el-sub-menu index={item.index} v-slots={slots}>
                        {renderMenu(item.children)}
                    </el-sub-menu>
                )
            }
            // 正常渲染普通的菜单
            return (
                <el-menu-item  index={item.index}>
                     <item.i/>
                    <span>{item.name}</span>
                </el-menu-item>)

        })
    }
    return ()=>{
        return (
         <el-menu
             class="menu-icon-svg"
             default-active={props.defaultActive}
             router={props.router}
             {...attrs}
         >
             {renderMenu(props.data)}
         </el-menu>
        )
    }
}
})