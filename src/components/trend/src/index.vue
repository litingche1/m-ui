<template>
    <main class="trend-con-main">
        <article :style="{color:textColor}">
            <slot v-if="slots.default" class="text"></slot>
            <div v-else class="text">{{text}}</div>
        </article>
        <article class="icons">
            <component :is="`el-icon-${toLine(upIcon)}`" v-if="type==='up'"
                       :style="{color:!reverseColor? upIconColor : '#52c41a'}"></component>
            <component :is="`el-icon-${toLine(downIcon)}`" v-else
                       :style="{color:!reverseColor? downIconColor : '#e6a23c'}"></component>
        </article>
    </main>
</template>

<script lang="ts" setup>
    import {toLine} from '../../../units';
    import {useSlots, computed} from 'vue'

    let props = defineProps({
        text: {
            type: String,
            default: ''
        },
        upIcon: {
            type: String,
            default: 'arrowup'
        },
        downIcon: {
            type: String,
            default: 'arrowdown'
        },
        upIconColor: {
            type: String,
            default: 'red'
        },
        downIconColor: {
            type: String,
            default: '#58bc58'
        },
        type: {
            type: String,
            default: 'up'
        },
        reverseColor: {
            type: Boolean,
            default: false
        },
        // 上升趋势文字颜色
        upTextColor: {
            type: String,
            default: '#58bc58'
        },
        // 下降趋势的文字颜色
        downTextColor: {
            type: String,
            default: 'rgb(0,0,0)'
        }
    })
    let slots = useSlots()
    let textColor=computed(()=>{
       return props.type==='up'?props.upTextColor : props.downTextColor
    })
</script>

<style scoped lang="scss">
    .trend-con-main {
        display: flex;
        align-content: center;
        justify-content: center;
    }

    .text {
        font-size: 14px;
        text-align: center;
        margin-right: 6px;
    }

    .icons {

        svg {
            width: 0.8em;
            height: 0.8em;
        }
    }
</style>