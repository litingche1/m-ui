<template>
    <main>
        <el-table
                :data="tableData"
                style="width: 100%"
                v-loading="loading"
                :element-loading-text="elementLoadingText"
                :element-loading-spinner="elementLoadingSpinner"
                :element-loading-svg-view-box="elementLoadingSvgViewBox"
                :element-loading-background="elementLoadingBackground"
                :element-loading-svg="elementLoadingSvg"
        >
            <template v-for="item in tableOption" :key="item.prop">
                <el-table-column :prop="item.prop" :label="item.label" :width="item.width" >
                        <template #default="scope">
                            <slot v-if="item.slot" :name="item.slot" :data="scope"></slot>
                        </template>
                </el-table-column>
            </template>
            <template v-for="item in actionOption" :key="item.prop">
                <el-table-column :prop="item.prop" :label="item.label" :width="item.width" >
                    <template #default="scope">
                        <slot name="action" :scope="scope"></slot>
                    </template>
                </el-table-column>
            </template>
        </el-table>
    </main>
</template>

<script lang="ts" setup>
    import {PropType, computed} from 'vue'
    import {TableOptions} from './type'

    let props = defineProps({
        tableData: {
            type: Array,
            required: true,
        },
        options: {
            type: Array as PropType<TableOptions[]>,
            required: true,
        },
        // 加载文案
        elementLoadingText: {
            type: String,
        },
        // 加载图标名
        elementLoadingSpinner: {
            type: String,
        },
        // 加载背景颜色
        elementLoadingBackground: {
            type: String,
        },
        // 加载图标是svg
        elementLoadingSvg: {
            type: String
        },
        // 加载团是svg的配置
        elementLoadingSvgViewBox: {
            type: String,
        },
    })
    let loading= computed(()=> !props.tableData || !(props.tableData.length>0))
    let tableOption = computed(() =>   {
        return props.options.filter(item => !item.action)
    })
    let actionOption = computed(() =>  props.options.filter(item => item.action))
</script>

<style scoped>

</style>