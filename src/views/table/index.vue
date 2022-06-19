<template>
    <main>
    <m-table :options="options" :tableData="data">
        <template #date="{data}">
            <el-icon-timer></el-icon-timer>
            <span style="margin-left: 10px">{{ data.row.date }}</span>
        </template>
        <template #name="{data}">
            <span>{{data.row.name}}</span>
        </template>
        <template #action="scope">
            <el-button size="small" type="primary" @click="edit(scope.scope)">编辑</el-button>
            <el-button size="small" type="danger">删除</el-button>
        </template>
    </m-table>
    </main>
</template>

<script lang="ts" setup>
    import {TableOptions} from "../../components/table/src/type";
    let options: TableOptions[] = [
        {
            prop: 'date',
            label: '日期',
            // width: '180',
            align: 'center',
            slot: 'date',
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
    let data=[
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
    ]
    let edit=(data:any)=>{
        console.log(data)
    }
</script>

<style scoped>

</style>