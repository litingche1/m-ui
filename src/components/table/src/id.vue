<template>
    <main>
        <el-table
                :data="dataList"
                style="width: 100%"
                v-loading="loading"
                :element-loading-text="elementLoadingText"
                :element-loading-spinner="elementLoadingSpinner"
                :element-loading-svg-view-box="elementLoadingSvgViewBox"
                :element-loading-background="elementLoadingBackground"
                :element-loading-svg="elementLoadingSvg"
                @row-click="rowClick"
                v-bind="$attrs"
        >
            <template v-for="item in tableOption" :key="item.prop">
                <el-table-column :prop="item.prop" :label="item.label" :width="item.width" >
                    <template #default="scope" >
                        <template v-if="scope.row.isEdit">
                            <el-input v-model="scope.row[item.prop]"></el-input>
                        </template>
                        <template v-else>
                            <template v-if="editDom===scope.$index+scope.column.id">
                                <div class="edit-box" @click="closeEditBox">
                                    <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                                    <div>
                                        <slot name="cellEdit" v-if="$slots.cellEdit" :scope="scope"></slot>
                                        <div class="action-icon" v-else>
                                            <el-icon-check class="check" @click.stop="check(scope)"></el-icon-check>
                                            <el-icon-close class="close" @click.stop="close(scope)"></el-icon-close>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <slot v-if="item.slot" :name="item.slot" :data="scope"></slot>
                                <span v-else>{{scope.row[item.prop]}}</span>
                                <component :is="`el-icon-${toLine(editIcon)}`" class="edit"  @click.stop="clickEditIcon(scope)" v-if="item.edit"></component>
                            </template>
                        </template>
                    </template>
                </el-table-column>
            </template>
            <template v-for="item in actionOption" :key="item.prop">
                <el-table-column :prop="item.prop" :label="item.label" :width="item.width" >
                    <template #default="scope">
                        <slot name="isEdit" :scope="scope" v-if="scope.row.isEdit"></slot>
                        <slot name="action" :scope="scope" v-else></slot>
                    </template>
                </el-table-column>
            </template>
        </el-table>
    </main>
</template>

<script lang="ts" setup>
    import {PropType, computed,ref,onMounted,watch} from 'vue'
    import {TableOptions} from './type'
    import {toLine} from '../../../units';
    import cloneDeep from "lodash/cloneDeep";
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
        editIcon:{
            type: String,
            default:'edit'
        },
        editRow:{
            type:Boolean,
            default:false
        },
        editRowIdx:{
            type: String,
            default:''
        }
    })
    let dataList=ref<any[]>(cloneDeep(props.tableData))
    let editRowIndex=ref<string>(props.editRowIdx)
    let emits = defineEmits(['confirm','cancel'])
    let editDom=ref<string>('')
    let loading= computed(()=> !props.tableData || !(props.tableData.length>0))
    let tableOption = computed(() =>   {
        return props.options.filter(item => !item.action)
    })
    let actionOption = computed(() =>  props.options.filter(item => item.action))
    // 点击确认
    let check = (scope: any) => {
        emits('confirm', scope)
        editDom.value = ''
    }
    // 点击取消
    let close = (scope: any) => {
        emits('cancel', scope)
        editDom.value = ''
    }
    let clickEditIcon=(data:any)=>{
        editDom.value =data.$index+data.column.id
    }
    let closeEditBox=()=>{
        editDom.value = ''
    }
    onMounted(()=>{
        dataList.value.map(item=>{
            item.isEdit=false
        })
    })
    watch(()=>props.tableData,val=>{
        dataList.value=val
        console.log(dataList.value)
        dataList.value.map(item=>{
            item.isEdit=false
        })
    },{deep:true})
    watch(()=>props.editRowIdx,val=>{
        if(val){
            editRowIndex.value=val
        }
    })
    let rowClick=(row:any, column:any)=>{
        if(column.label===actionOption.value[0].label){
            if(props.editRow && editRowIndex.value===props.editRowIdx){
                console.log(row,column)
                // row.isEdit=!row.isEdit
                // console.log(row.isEdit)
                // dataList.value.map(item=>{
                //     item.isEdit=true
                // })
                // row.isEdit=!row.isEdit
                dataList.value.map(item=>{

                    if(item.id==row.id){
                        console.log(row)
                        item.isEdit=true
                    } else{
                        console.log(row)
                        item.isEdit=false
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .edit-box{
        display: flex;
    }
    .edit {
        width: 1em;
        height: 1em;
        position: relative;
        top: 2px;
        left: 12px;
        cursor: pointer;
    }
    .action-icon {
        display: flex;
    svg {
        width: 1em;
        height: 1em;
        margin-left: 16px;
        position: relative;
        top: 18px;
        cursor: pointer;
    }
    .check {
        color: red;
    }
    .close {
        color: green;
    }
    }
</style>