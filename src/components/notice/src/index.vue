<template>
    <el-popover
            placement="bottom"
            :width="300"
            trigger="click"
    >
        <template #default>
            <slot></slot>
        </template>
        <template #reference>
            <el-badge :value="value" :max="max" :is-dot="isDot" class="item">
                <el-icon-bell></el-icon-bell>
            </el-badge>
        </template>
    </el-popover>
</template>

<script lang="ts" setup>
    let props = defineProps({
        value: {
            type: [String, Number],
            default: ''
        },
        max: {
            type: Number,
            default: 99
        },
        isDot: {
            type: Boolean,
            default: false
        }
    })
</script>

<style scoped>
    .item {
        cursor: pointer;
    }
</style>