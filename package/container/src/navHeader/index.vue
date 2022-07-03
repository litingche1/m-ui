<template>
<main class="nav-header">
    <div @click="toggle" class="svg-group">
        <el-icon-expand v-if="collapse"></el-icon-expand>
        <el-icon-fold v-else></el-icon-fold>
    </div>
</main>
</template>

<script setup lang="ts">
    let props = defineProps<{
        collapse:Boolean
    }>()
    let emits=defineEmits(['update:collapse'])
    const toggle=()=>{
        emits('update:collapse',!props.collapse)
    }
</script>


<style lang="scss">
.nav-header{
    height: 60px;
    padding:0 20px;
    display: flex;
    align-items: center;
    .svg-group{
        cursor: pointer;
    }
}
</style>