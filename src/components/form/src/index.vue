<template>
    <main>
      <el-form v-bind="$attrs" :model="model" :rules="rules">
        <el-form-item v-for="item in options" :label="item.label" :key="item.prop" :prop="item.prop">
            <component :is="`el-${item.type}`" v-model="model[item.prop]" v-bind="item.attrs"></component>
        </el-form-item>
      </el-form>
    </main>
</template>

<script lang="ts" setup>
import {PropType,ref,reactive,onMounted} from 'vue'
import {fromItem} from '../type/index'
import cloneDeep from "lodash/cloneDeep";
let props=defineProps({
  options:{
    type:Array as PropType<fromItem[]>,
    required:true
  }
})
let model=reactive<any>({})
let rules=reactive<any>({})
onMounted(()=>{
  // let m:any={}
  // let r:any={}
  props.options.forEach((item:fromItem)=>{
    model[item.prop!]=item.value
    rules[item.prop!]=item.rules
    // model=ref(cloneDeep(m))
    // rules=ref(cloneDeep(r))
  })
  console.log(rules)
  console.log(model)
})
</script>

<style scoped>

</style>
