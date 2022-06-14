<template>
    <main>
        <m-form :options="options" label-width="120px"
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
                <el-button type="primary">Click to upload</el-button>
            </template>
            <template #uploadTip>
                jpg/png files with a size less than 500KB.
            </template>
            <template #action="scope">
                <el-button type="primary" @click="onSubmit(scope)">提交</el-button>
                <el-button @click="cancel(scope)">重置</el-button>
            </template>
        </m-form>
    </main>
</template>

<script lang="ts" setup>
    import {FormInstance, fromItem} from '../../components/form/type/index'
    import {ElMessage, ElMessageBox} from 'element-plus'
    interface formScope{
        form:FormInstance,
        model:Object
    }
    let options: fromItem[] = [
        {
            type: 'input',
            label: '用户名',
            value: '',
            prop: 'username',
            rules: [
                {required: true, message: 'Please input username', trigger: 'blur'},
                {min: 6, max: 8, message: 'Length should be 3 to 5', trigger: 'blur'},
            ]
        },
        {
            type: 'input',
            label: '密码',
            value: '',
            prop: 'password',
            rules: [
                {required: true, message: 'Please input Activity name', trigger: 'blur'},
                {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'},
            ],
            attrs: {
                type: "password"
            }
        },
        {
            type: 'select',
            value: '',
            placeholder: '请选择职位',
            prop: 'role',
            label: '职位',
            attrs: {
                style: {
                    width: '100%'
                },
            },
            rules: [
                {
                    required: true,
                    message: 'Please select Activity zone',
                    trigger: ['blur']
                }
            ],
            children: [
                {
                    type: 'option',
                    label: '经理',
                    value: '1'
                },
                {
                    type: 'option',
                    label: '主管',
                    value: '2'
                },
                {
                    type: 'option',
                    label: '员工',
                    value: '3'
                }
            ]
        },
        {
            type: 'checkbox-group',
            value: [],
            prop: 'like',
            label: '爱好',
            rules: [
                {
                    required: true,
                    message: '爱好不能为空',
                    trigger: 'blur'
                }
            ],
            children: [
                {
                    type: 'checkbox',
                    label: '足球',
                    value: '1'
                },
                {
                    type: 'checkbox',
                    label: '篮球',
                    value: '2'
                },
                {
                    type: 'checkbox',
                    label: '排球',
                    value: '3'
                }
            ]
        },
        {
            type: 'radio-group',
            value: '',
            prop: 'gender',
            label: '性别',
            rules: [
                {
                    required: true,
                    message: '性别不能为空',
                    trigger: 'change'
                }
            ],
            children: [
                {
                    type: 'radio',
                    label: '男',
                    value: 'male'
                },
                {
                    type: 'radio',
                    label: '女',
                    value: 'female'
                },
                {
                    type: 'radio',
                    label: '保密',
                    value: 'not'
                }
            ]
        },
        {
            type: 'upload',
            prop: 'upload',
            label: '上传',
            uploadAttrs: {
                action: 'https://jsonplaceholder.typicode.com/posts/',
                multiple:true,
                limit:3
            },
            rules: [
                {required: true, message: '请上传文件', trigger: 'blur'},
            ],
        },
        {
            type: 'editor',
            value: '123',
            prop: 'desc',
            label: '描述',
            placeholder: '请输入描述',
            rules: [
                {
                    required: true,
                    message: '描述不能为空',
                    trigger: 'blur'
                }
            ]
        }
    ]
    const onPreview = (file: File) => {
        console.log(file)
    }
    const onRemove = (file: File, fileList: FileList) => {
        console.log(file, fileList)
    }
    const onSuccess = (response: any, file: File, fileList: FileList) => {
        console.log(file, response, fileList)
    }
    const onProgress = (event: any, file: File, fileList: FileList) => {
        console.log(file, fileList, event)
    }
    const onChange = (file: File, fileList: FileList) => {
        console.log(file, fileList)
    }
    const beforeUpload = (file: File) => {
        console.log(file)
    }
    const beforeRemove = (file: File, fileList: FileList) => {
        console.log(file, fileList)
        return ElMessageBox.confirm(
            `Cancel the transfert of ${file.name} ?`
        ).then(
            () => true,
            () => false
        )
    }
    const onExceed = (file: File, fileList: FileList) => {
        console.log(file, fileList)
    }
    const onError = (err: any, file: any, fileList: any) => {
        console.log(err, file, fileList)
        ElMessage.warning(
            `The limit is 3, you selected ${file.length} files this time, add up to ${
                file.length + fileList.length
            } totally`
        )
    }
    const cancel=(scope:formScope)=>{
      scope.form.resetFields()
    }
    const onSubmit=(scope:formScope)=>{
        scope.form.validate((valid, fields) => {
            if (valid) {
                ElMessage.success(`提交成功`)
                console.log(scope.model)
            } else {
                ElMessage.warning('error submit!')
                console.log('error submit!', fields)
            }
        })
    }
</script>

<style scoped>

</style>
