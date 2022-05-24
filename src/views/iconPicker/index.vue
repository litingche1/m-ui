<template>
    <m-choose-icon :title="title" v-model:visible="visible">
        图标选择器
    </m-choose-icon>
</template>

<script lang="ts" setup>
    import mChooseIcon from '../../components/chooseIcon/src/index.vue'
    import {ref} from 'vue'

    let title = ref('图标选择器')
    let visible = ref(false)
</script>

<style scoped>

</style>