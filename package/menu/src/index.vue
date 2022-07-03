<template>
    <main>
        <el-menu class="el-menu-vertical-demo" v-bind="$attrs" :default-active="defaultActive"
                 :router="router">
            <template v-for="item in data" :key="item.icon">
                <el-menu-item v-if="!item.children || item.children.length===0" :index="item.index">
                    <component :is="`el-icon-${toLine(item.icon)}`"></component>
                    <span>{{item.name}}</span>
                </el-menu-item>
                <el-sub-menu v-if="item.children&&item.children.length>0" index="1-4">
                    <template #title>
                        <component :is="`el-icon-${toLine(item.icon)}`"></component>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="child in item.children" :index="child.index">
                        <component :is="`el-icon-${toLine(child.icon)}`"></component>
                        <span>{{child.name}}</span>
                    </el-menu-item>
                </el-sub-menu>
            </template>


        </el-menu>
    </main>
</template>

<script lang="ts" setup>
    import {PropType} from 'vue'
    import {menuItem} from './type'
    import {toLine} from "../../units";

    let props = defineProps({
        data: {
            type: Array as PropType<menuItem[]>,
            required: true
        },
        defaultActive: {
            type: String,
            default: ''
        },
        router: {
            type: Boolean,
            default: false,
        }
    })
</script>

<style scoped lang="scss">
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }
    svg{
        margin-right: 6px;
        width:1em;
        height:1em;
    }
</style>