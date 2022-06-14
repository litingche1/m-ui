<template>
    <main>
        <el-form v-bind="$attrs" :model="model" :rules="rules" :validate-on-rule-change="false" v-if="model" ref="form">
            <template v-for="item in options" :key="item.prop">
                <el-form-item v-if="!item.children || item.children.length===0" :label="item.label" :prop="item.prop">
                    <component v-if="item.type!=='upload' && item.type !== 'editor'" :is="`el-${item.type}`" v-model="model[item.prop]"
                               v-bind="item.attrs" :placeholder="item.placeholder"></component>
                    <el-upload
                            v-if="item.type === 'upload'"
                            v-bind="item.uploadAttrs"
                            :on-preview="onPreview"
                            :on-remove="onRemove"
                            :on-success="onSuccess"
                            :on-error="onError"
                            :on-progress="onProgress"
                            :on-change="onChange"
                            :before-upload="beforeUpload"
                            :before-remove="beforeRemove"
                            :http-request="httpRequest"
                            :on-exceed="onExceed"
                    >
                        <slot name="uploadArea"></slot>
                        <slot name="uploadTip"></slot>
                    </el-upload>
                    <div v-if="item.type==='editor'" id="editor">

                    </div>
                </el-form-item>
                <el-form-item v-else :label="item.label" :prop="item.prop">
                    <component :is="`el-${item.type}`" v-model="model[item.prop]" v-bind="item.attrs"
                               :placeholder="item.placeholder">
                        <component v-for="(child,idx) in item.children" :key="idx" :is="`el-${child.type}`"
                                   v-bind="child.attrs" :label="child.label" :value="child.value">
                        </component>
                    </component>
                </el-form-item>
            </template>
            <el-form-item>
                <slot name="action" :form="form" :model="model"></slot>
            </el-form-item>
        </el-form>
    </main>
</template>

<script lang="ts" setup>
    import {PropType, ref, reactive, onMounted, watch, nextTick} from 'vue'
    import {fromItem, FormInstance} from '../type/index'
    import cloneDeep from "lodash/cloneDeep";
    import E from 'wangeditor'
    let props = defineProps({
        options: {
            type: Array as PropType<fromItem[]>,
            required: true
        },
        httpRequest:{
            type:Function
        }
    })
    let emits = defineEmits(['on-preview', 'on-remove', 'on-success', 'on-error', 'on-progress', 'on-change', 'before-upload', 'before-remove', 'on-exceed'])
    let model = ref<any>({})
    let rules = ref<any>({})
    let form = ref<FormInstance | null>()
    const init = () => {
        if (props.options && props.options.length) {
            let m: any = {}
            let r: any = {}
            props.options.forEach((item: fromItem) => {
                m[item.prop!] = item.value
                r[item.prop!] = item.rules
                if(item.type==='editor'){
                    nextTick(()=>{
                        let elm=document.getElementById('editor')
                        if(elm){
                            const editor = new E("#editor")
                            editor.config.placeholder = item.placeholder!
                            editor.create()
                            // 初始化富文本的内容
                            editor.txt.html(item.value)
                            //监听文本变化
                            editor.config.onchange = (newHtml: string) => {
                                model.value[item.prop!] = newHtml
                            }
                        }
                    })

                }
            })
            model.value = cloneDeep(m)
            rules.value = cloneDeep(r)
        }
    }
    onMounted(() => {
        init()
        // nextTick(() => {
        //     console.log(form.value!)
        //     form.value!.clearValidate()
        // })
    })
    watch(() => props.options, () => {
        init()
    }, {deep: true})
    // 上传组件的所有方法
    let onPreview = (file: File) => {
        emits('on-preview', file)
    }
    let onRemove = (file: File, fileList: FileList) => {
        emits('on-remove', {file, fileList})
    }
    let onSuccess = (response: any, file: File, fileList: FileList) => {
        // 上传图片成功 给表单上传项赋值
        let uploadItem = props.options.find(item => item.type === 'upload')!
        model.value[uploadItem.prop!] = {response, file, fileList}
        emits('on-success', {response, file, fileList})
    }
    let onError = (err: any, file: File, fileList: FileList) => {
        emits('on-error', {err, file, fileList,})
    }
    let onProgress = (event: any, file: File, fileList: FileList) => {
        emits('on-progress', {event, file, fileList})
    }
    let onChange = (file: File, fileList: FileList) => {
        emits('on-change', {file, fileList})
    }
    let beforeUpload = (file: File) => {
        emits('before-upload', file)
    }
    let beforeRemove = (file: File, fileList: FileList) => {
        emits('before-remove', {file, fileList})
    }
    let onExceed = (files: File, fileList: FileList) => {
        emits('on-exceed', {files, fileList})
    }
    // let httpRequest = () => {
    //
    // }
</script>

<style scoped>

</style>
