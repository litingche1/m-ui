<template>
    <main>
        <m-form :options="options" label-width="120px">

        </m-form>
    </main>
</template>

<script lang="ts" setup>
import {fromItem} from '../../components/form/type/index'
let options:fromItem[]=[
  {
    type:'input',
    label:'用户名',
    value:'425343',
    prop:'username',
    rules:[
      { required: true, message: 'Please input username', trigger: 'blur' },
      { min: 6, max: 8, message: 'Length should be 3 to 5', trigger: 'blur' },
    ]
  },
  {
    type:'input',
    label:'密码',
    value:'243',
    prop:'password',
    rules:[
      { required: true, message: 'Please input Activity name', trigger: 'blur' },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ]
  }
]
</script>

<style scoped>

</style>
