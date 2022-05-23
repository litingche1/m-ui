<template>
    <el-container>
        <el-aside width="auto">
            <nav-side :collapse="isCollapse"></nav-side>
        </el-aside>
        <el-container>
            <el-header>
                <nav-header v-model:collapse="isCollapse"></nav-header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
    import {ref,watch} from 'vue'
    import navSide from './navSide/index.vue'
    import navHeader from './navHeader/index.vue'
    let isCollapse = ref(false)
    watch(isCollapse,function(value){
        console.log(value)
    })
</script>


<style lang="scss" scoped>
    .el-header {
        padding: 0;
        border-bottom: 1px solid #eee;
    }
</style>
