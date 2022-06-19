<template>
    <main>
        <el-table :data="tableData" style="width: 100%">
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
        }
    })
    console.log(props)
    let tableOption = computed(() =>   {
        return props.options.filter(item => !item.action)
    })
    console.log(tableOption)
    let actionOption = computed(() =>  props.options.filter(item => item.action))
</script>

<style scoped>

</style>