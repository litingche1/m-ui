<template>
<main class="nav-side">
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="collapse"
    >
        <el-menu-item index="1">
            <el-icon-menu></el-icon-menu>
            <template #title>首页</template>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon-menu></el-icon-menu>
            <template #title>图标选择器</template>
        </el-menu-item>
        <el-menu-item index="3">
            <el-icon-menu></el-icon-menu>
            <template #title>城市下拉框联动组件</template>
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