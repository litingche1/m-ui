<template>
<main class="nav-side">
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="collapse"
    >
        <el-menu-item index="1">
            <el-icon-homefilled></el-icon-homefilled>
            <template #title>首页</template>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon-menu></el-icon-menu>
            <template #title>图标选择器</template>
        </el-menu-item>
        <el-menu-item index="3">
            <el-icon-position></el-icon-position>
            <template #title>城市下拉框联动组件</template>
        </el-menu-item>
        <el-menu-item index="4">b
            <el-icon-sort></el-icon-sort>
            <template #title>趋势标记</template>
        </el-menu-item>
        <el-menu-item index="5">
            <el-icon-bell></el-icon-bell>
            <template #title>通知</template>
        </el-menu-item>
    </el-menu>
</main>
</template>

<script setup lang="ts">
    let props = defineProps<{
        collapse:Boolean
    }>()
</script>


<style lang="scss" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }
</style>