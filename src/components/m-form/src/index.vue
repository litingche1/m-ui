<template>
    <main :class="{'m-ui-el-dialog__body':isScroll}">
        <el-dialog
                v-model="show"
                width="50%"
                v-bind="$attrs"
                :before-close="handleClose"
        >
            <template #default>
                <m-form
                        :options="options"
                        label-width="120px"
                        ref="form"
                        @on-preview="onPreview"
                        @on-remove="onRemove"
                        @on-success="onSuccess"
                        @on-error="onError"
                        @on-progress="onProgress"
                        @on-change="onChange"
                        @before-upload="beforeUpload"
                        @before-remove="beforeRemove"
                        @on-exceed="onExceed"
                >
                    <template #uploadArea>
                        <slot name="uploadArea"></slot>
                    </template>
                    <template #uploadTip>
                        <slot name="uploadTip"></slot>
                    </template>
                </m-form>
            </template>
            <template #footer>
                <slot name="footerCon" :form="form"></slot>
            </template>
        </el-dialog>
    </main>
</template>

<script lang="ts" setup>
    import {PropType, ref, watch} from 'vue'
    import {fromItem} from '../../form/type/index'

    let props = defineProps({
        dialogVisible: {
            type: Boolean,
            value: false,
        },
        isScroll:{
            type: Boolean,
            value: false,
        },
        options: {
            type: Array as PropType<fromItem[]>,
            required: true
        },
        onPreview: {
            type: Function
        },
        onRemove: {
            type: Function
        },
        onSuccess: {
            type: Function
        },
        onError: {
            type: Function
        },
        onProgress: {
            type: Function
        },
        onChange: {
            type: Function
        },
        beforeUpload: {
            type: Function
        },
        beforeRemove: {
            type: Function
        },
        onExceed: {
            type: Function
        },

    })
    let form = ref()
    let emits = defineEmits(['choseDialogVisible'])
    let show = ref(props.dialogVisible)
    const handleClose = () => {
        show.value = false
    }
    watch(() => props.dialogVisible, (val) => {
        show.value = val
    })
    watch(() => show.value, (val) => {
        emits('choseDialogVisible', val)
    })
</script>

<style scoped>

</style>