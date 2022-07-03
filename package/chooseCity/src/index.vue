<template>
    <main>
        <el-select v-model="province" class="m-2" clearable placeholder="请选择省份" size="large">
            <el-option
                    v-for="item in cityList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code"
            />
        </el-select>
        <el-select v-model="city" class="m-2" clearable :disabled="!province" placeholder="请选择地市" size="large">
            <el-option
                    v-for="item in cityOptions"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code"
            />
        </el-select>
        <el-select v-model="area" class="m-2" clearable :disabled="!province || !city" placeholder="请选择区" size="large">
            <el-option
                    v-for="item in areaOptions"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code"
            />
        </el-select>
    </main>
</template>

<script lang="ts" setup>
    import {ref, watch, reactive} from 'vue'
    import AreaData from '../lib/pca-code.json'

    export interface AreaItem {
        name: string,
        code: string,
        children?: AreaItem[]
    }
    export interface Data {
        name: string,
        code: string
    }
    let emits = defineEmits(['changeCity'])
    let province = ref<string>('')
    let city = ref<string>('')
    let area = ref<string>('')
    // let provinceOptions = reactive({name: 212, label: 8888})
    let cityOptions = ref<AreaItem[]>([])
    let areaOptions = ref<AreaItem[]>([])
    let cityList = reactive(AreaData)

    watch(() => province.value,
        (val) => {
            if (val) {
                cityOptions.value = cityList.find(item => item.code === val)!.children
            }
            city.value = ''
            area.value = ''
        }
    )
    watch(() => city.value,
        (val) => {
            if (val) {
                areaOptions.value = cityOptions.value.find(item => item.code === val)!.children as any
            }
            area.value = ''
        }
    )
    watch(() => area.value,
        (val) => {
            if (val) {
                let provinceData:Data = {
                    name: cityList.find(item => item.code === province.value)!.name,
                    code: province.value
                }
                let cityData:Data = {
                    name: cityOptions.value.find(item => item.code === city.value)!.name,
                    code: city.value
                }
                let areaData:Data = {
                    name: areaOptions.value.find(item => item.code === val)!.name,
                    code: val
                }
                let param = {
                    provinceData,
                    cityData,
                    areaData
                }
                emits('changeCity', param)
            }
        }
    )
</script>

<style scoped>
    .m-2 {
        margin-right: 20px;
    }
</style>