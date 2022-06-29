<template>
    <main>
    <m-table
            :options="options"
            :tableData="data"
            elementLoadingText="加载中..."
            elementLoadingBackground="rgba(0,0,0,.8)"
            :element-loading-svg="svg"
            element-loading-svg-view-box="-10, -10, 50, 50"
            editIcon="eleme"
            v-model:editRowIdx="editRowIdx"
            :editRow="true"
            pagination
            stripe
            border
            :total="total"
            :currentPage="current"
            :pageSize="pageSize"
            @confirm="confirm"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
    >
        <template #date="{data}">
            <el-icon-timer></el-icon-timer>
            <span style="margin-left: 10px">{{ data.row.date }}</span>
        </template>
        <template #name="{data}">
            <span>{{data.row.name}}</span>
        </template>
        <template #cellEdit>
            <el-button size="small" type="primary" >编辑1</el-button>
            <el-button size="small" type="danger">删除2</el-button>
        </template>
        <template #action="scope">
            <el-button size="small" type="primary" @click="edit(scope.scope)">编辑</el-button>
            <el-button size="small" type="danger">删除</el-button>
        </template>
        <template #isEdit="scope">
            <el-button size="small" type="primary">确认</el-button>
            <el-button size="small" type="danger">取消</el-button>
        </template>
    </m-table>
    </main>
</template>

<script lang="ts" setup>
    import{ref,onMounted} from 'vue'
    import {TableOptions} from "../../components/table/src/type";
    import axios from 'axios'
    let options: TableOptions[] = [
        {
            prop: 'date',
            label: '日期',
            // width: '180',
            align: 'center',
            slot: 'date',
            edit:true
        },
        {
            prop: 'name',
            label: '姓名',
            // width: '180',
            align: 'center',
            slot: 'name'
        },
        {
            prop: 'address',
            label: '地址',
            align: 'center',
        },
        {
            label: '操作',
            action: true,
            align: 'center'
        }
    ]
    let data=ref<any[]>([])
    let editRowIdx=ref('')
    let svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
    let current = ref<number>(1)
    let pageSize = ref<number>(10)
    let total = ref<number>(0)
    let getData = () => {
        axios.post('/api/list', {
            current: current.value,
            pageSize: pageSize.value,
        }).then((res: any) => {
            if (res.data.code === '200') {
                data.value = res.data.data.rows
                total.value = res.data.data.total
                console.log(res.data.data)
            }
        })
    }
    let handleSizeChange = (val: number) => {
        pageSize.value = val
        getData()
    }
    let handleCurrentChange = (val: number) => {
        current.value = val
        getData()
    }
    onMounted(() => {
        getData()
    })
    // setTimeout(()=>{
    //     data.value=[
    //         {
    //             date: '2016-05-03',
    //             name: 'Tom',
    //             id:1,
    //             address: 'No. 189, Grove St, Los Angeles',
    //         },
    //         {
    //             date: '2016-05-02',
    //             name: 'Tom',
    //             id:2,
    //             address: 'No. 189, Grove St, Los Angeles',
    //         },
    //         {
    //             date: '2016-05-04',
    //             name: 'Tom',
    //             id:3,
    //             address: 'No. 189, Grove St, Los Angeles',
    //         },
    //         {
    //             date: '2016-05-01',
    //             name: 'Tom',
    //             id:4,
    //             address: 'No. 189, Grove St, Los Angeles',
    //         },
    //     ]
    // },3000)
    let edit=(data:any)=>{
        editRowIdx.value='edit'
        console.log(data)
    }
    let confirm=(data:any)=>{
        console.log(data)
    }
</script>

<style scoped>

</style>