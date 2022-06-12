<template>
    <main>
      <el-form v-bind="$attrs" :model="model" :rules="rules" :validate-on-rule-change="false">
        <template v-for="item in options" :key="item.prop">
          <el-form-item v-if="!item.children || item.children.length===0"  :label="item.label" :prop="item.prop">
            <component :is="`el-${item.type}`" v-model="model[item.prop]" v-bind="item.attrs" :placeholder="item.placeholder"></component>
          </el-form-item>
          <el-form-item v-else  :label="item.label"  :prop="item.prop">
            <component :is="`el-${item.type}`" v-model="model[item.prop]" v-bind="item.attrs" :placeholder="item.placeholder">
              <component v-for="(child,idx) in item.children" :key="idx" :is="`el-${child.type}`"  v-bind="child.attrs" :label="child.label" :value="child.value">
              </component>
            </component>
          </el-form-item>
        </template>

      </el-form>
    </main>
</template>

<script lang="ts" setup>
import {PropType,ref,reactive,onMounted,watch} from 'vue'
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
const init=()=>{
  if(props.options&&props.options.length>0){
    props.options.forEach((item:fromItem)=>{
      model[item.prop!]=item.value
      rules[item.prop!]=item.rules
    })
  }
}
onMounted(()=>{
  init()
})
watch(()=>props.options,()=>{
  init()
},{deep:true})
</script>

<style scoped>

</style>
