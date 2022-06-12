<template>
    <main>
        <m-form :options="options" label-width="120px">
          <template #uploadArea>
              <el-button type="primary">Click to upload</el-button>
          </template>
            <template #uploadTip>
                jpg/png files with a size less than 500KB.
            </template>
        </m-form>
    </main>
</template>

<script lang="ts" setup>
import {fromItem} from '../../components/form/type/index'
let options:fromItem[]=[
  {
    type:'input',
    label:'用户名',
    value:'',
    prop:'username',
    rules:[
      { required: true, message: 'Please input username', trigger: 'blur' },
      { min: 6, max: 8, message: 'Length should be 3 to 5', trigger: 'blur' },
    ]
  },
  {
    type:'input',
    label:'密码',
    value:'',
    prop:'password',
    rules:[
      { required: true, message: 'Please input Activity name', trigger: 'blur' },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    attrs:{
      type:"password"
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
        type:'upload',
        prop:'upload',
        label: '上传',
        uploadAttrs:{
            action:'https://jsonplaceholder.typicode.com/posts/'
        }
    }
]
</script>

<style scoped>

</style>
