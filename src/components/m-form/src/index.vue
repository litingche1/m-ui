<template>
    <main>
        <el-dialog
                v-model="show"
                width="50%"
                v-bind="$attrs"
                :before-close="handleClose"
        >
            <template #default>
                <m-form :options="options" label-width="120px" ref="form"
                >
                    <template #uploadArea>
                        <el-button type="primary">Click to upload</el-button>
                    </template>
                    <template #uploadTip>
                        jpg/png files with a size less than 500KB.
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
        options: {
            type: Array as PropType<fromItem[]>,
            required: true
        },

    })
    let form=ref()
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