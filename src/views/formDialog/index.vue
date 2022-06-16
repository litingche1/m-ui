<template>
    <main>
        <el-button text @click="dialogVisible = true"
        >click to open the Dialog
        </el-button
        >
        <m-form-dialog
                :dialogVisible="dialogVisible"
                @choseDialogVisible="choseDialogVisible"
                title="弹出表单"
               :options="options"
                :on-success="handleSuccess"
                :on-change="handleChange"
                :isScroll="true"
        >
            <template #uploadArea>
                <el-button type="primary">Click to upload</el-button>
            </template>
            <template #uploadTip>
                jpg/png files with a size less than 500KB.
            </template>
            <template #footerCon="scope">
                 <span class="dialog-footer">
                <el-button @click="cancel(scope.form)">取消</el-button>
                <el-button type="primary" @click="confirm(scope.form)"
                >提交</el-button
                >
              </span>
            </template>
        </m-form-dialog>
    </main>
</template>

<script lang="ts" setup>
    import {ref} from 'vue'
    import {fromItem, FormInstance} from "../../components/form/type";
    import {ElMessage, ElMessageBox} from 'element-plus'

    let dialogVisible = ref(false)
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
        // {
        //     type: 'select',
        //     value: '',
        //     placeholder: '请选择职位',
        //     prop: 'role',
        //     label: '职位',
        //     attrs: {
        //         style: {
        //             width: '100%'
        //         },
        //     },
        //     rules: [
        //         {
        //             required: true,
        //             message: 'Please select Activity zone',
        //             trigger: ['change']
        //         }
        //     ],
        //     children: [
        //         {
        //             type: 'option',
        //             label: '经理',
        //             value: '1'
        //         },
        //         {
        //             type: 'option',
        //             label: '主管',
        //             value: '2'
        //         },
        //         {
        //             type: 'option',
        //             label: '员工',
        //             value: '3'
        //         }
        //     ]
        // },
        // {
        //     type: 'checkbox-group',
        //     value: [],
        //     prop: 'like',
        //     label: '爱好',
        //     rules: [
        //         {
        //             required: true,
        //             message: '爱好不能为空',
        //             trigger: 'change'
        //         }
        //     ],
        //     children: [
        //         {
        //             type: 'checkbox',
        //             label: '足球',
        //             value: '1'
        //         },
        //         {
        //             type: 'checkbox',
        //             label: '篮球',
        //             value: '2'
        //         },
        //         {
        //             type: 'checkbox',
        //             label: '排球',
        //             value: '3'
        //         }
        //     ]
        // },
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
                multiple: true,
                limit: 3
            },
            rules: [
                {required: true, message: '请上传文件', trigger: 'blur'},
            ],
        },
        {
            type: 'editor',
            value: '',
            prop: 'desc',
            label: '描述',
            placeholder: '请输入描述',
            rules: [
                {
                    required: true,
                    message: '描述不能为空',
                    trigger: 'change'
                }
            ]
        }
    ]
    const choseDialogVisible = (val: boolean) => {
        dialogVisible.value = val
    }
    let confirm = (form: any) => {
        let validate = form.validate()
        validate((valid: boolean) => {
            if (valid) {
                console.log(form.modelData())
                ElMessage.success('验证成功')
            } else {
                ElMessage.error('表单填写有误,请检查')
            }
        })
    }
    const cancel = (form: any) => {
        form.resetFields()
        dialogVisible.value = false
    }
    let handleSuccess = (val: any) => {
        console.log('success')
        console.log(val)
    }
    let handleChange = (val: any) => {
        console.log('change')
        console.log(val)
    }
</script>

<style scoped>

</style>