<template>
    <main>
        <el-button @click="handleClick" type="primary">
            <slot></slot>
        </el-button>
        <section class="m-ui-el-dialog__body">
            <el-dialog :title="title" v-model="dialogVisible">
                <main class="container">
                    <div class="item" v-for="(item,index) in Object.keys(ElementPlusIconsVue)" :key="item" @click="copyItem(item)">
                        <div class="text">
                            <component :is="`el-icon-${toLine(item)}`"></component>
                        </div>
                        <div class="icon">{{item}}</div>
                    </div>
                </main>
            </el-dialog>
        </section>

    </main>
</template>

<script lang="ts" setup>
    import {ref, watch} from 'vue'
    import {toLine} from '../../units';
    import * as ElementPlusIconsVue from '@element-plus/icons-vue'
    import { useCopy } from '../../hoooks/useCopy';

    let props = defineProps<{
        title: string,
        visible: boolean
    }>()
    let dialogVisible = ref<boolean>(props.visible)
    let emits = defineEmits(['update:visible'])
    const handleClick = () => {
        dialogVisible.value = !dialogVisible.value
    }
    const copyItem=(text:string)=>{
        let data=`<el-icon-${text} />`
        useCopy(data)
        dialogVisible.value = false
    }
    watch(
        () => props.visible,
        (value) => {
            dialogVisible.value = value
        }
    )
    watch(
        () => dialogVisible,
        (value) => {
            emits('update:visible', value)
        }
    )
</script>

<style scoped>
    .container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .item {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        cursor: pointer;
        height: 70px;
    }

    .text {
        font-size: 14px;
    }

    .icon {
        flex: 1;
    }

    svg {
        width: 2em;
        height: 2em;
    }
</style>