<template>
    <el-popover
            v-model:visible="visible" placement="bottom-start" :width="500" trigger="click"
    >
        <template #reference>
            <article class="icon-label" @click="visible = !visible">
                {{result}}
                <el-icon-arrowdown :class="{'rote':visible}"></el-icon-arrowdown>
            </article>
        </template>
        <article class="popover-con">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-radio-group v-model="radio" size="default">
                        <el-radio-button label="按城市"></el-radio-button>
                        <el-radio-button label="按省份"></el-radio-button>
                    </el-radio-group>
                </el-col>
                <el-col :span="14" :offset="2">
                    <el-select v-model="value" class="m-2" placeholder="请选择城市" filterable :filter-method="filterMethod" @change="selectChange">
                        <el-option
                                v-for="item in options"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id"
                        />
                    </el-select>
                </el-col>
            </el-row>
        </article>
        <template v-if="radio==='按城市'">
            <article class="popover-con-city">
                <div class="city-item" v-for="(value,key) in citys" :key="key" @click="selectName(key)">{{key}}</div>
            </article>
            <el-scrollbar max-height="400px">
                <article class="city-con">
                    <template v-for="(value,key) in citys" :key="key">
                        <el-row class="row-city" :id="key">
                            <el-col :span="2">
                                {{key}}&nbsp;:
                            </el-col>
                            <el-col :span="22" class="city-name">
                                <div v-for="item in value" :key="item.id" class="city-name-item"
                                     @click="selectCity(item)">
                                    {{item.name}}
                                </div>
                            </el-col>
                        </el-row>
                    </template>

                </article>
            </el-scrollbar>
        </template>
        <template v-else>
            <article class="popover-con-city">
                <div class="city-item" v-for="(value,key) in areaData" :key="key" @click="selectName(key)">{{key}}</div>
            </article>
            <el-scrollbar max-height="400px">
                <article class="city-con">
                    <template v-for="(item,idx) in Object.values(areaData)" :key="idx">
                        <el-row class="row-city" :id="item2.id" v-for="item2 in item" :key="item2.id">
                            <el-col :span="3">
                                {{item2.name}}&nbsp;:
                            </el-col>
                            <el-col :span="21" class="city-name">
                                <div v-for="(item3,idx3) in item2.data" :key="idx3" class="city-name-item"
                                     @click="selectCity2(item2,item3)">
                                    {{item3}}
                                </div>
                            </el-col>
                        </el-row>
                    </template>

                </article>
            </el-scrollbar>
        </template>

    </el-popover>
</template>

<script lang="ts" setup>

    import {ref,onMounted} from 'vue'
    import city from '../lib/city'
    import areaList from '../lib/province.json'
    import {cityItem, areaItem} from './type'

    let result = ref<string | undefined>('请选择')
    let radio = ref('按城市')
    let value = ref('')
    let visible = ref(false)
    let citys = ref(city.cities)
    let areaData = ref(areaList)
    let cityList=ref<cityItem[]>([])
    let emits = defineEmits(['cityChange', 'areaChange'])
    let options = ref<cityItem[]>([])
    const selectCity = (val: cityItem) => {
        visible.value = false
        result.value = val.name
        emits('cityChange', val)
    }
    const selectCity2 = (val: areaItem, name: string) => {
        visible.value = false
        result.value = name
        emits('areaChange', val)
    }
    const selectName = (val: string) => {
        if (val) {
            let el = document.getElementById(val)
            el!.scrollIntoView()
        }

    }
    onMounted(()=>{
        let values=Object.values(city.cities).flat()
        options.value=values
        cityList.value=values
    })
    const filterMethod=(val:string)=>{
      if(val===''){
          options.value=JSON.parse(JSON.stringify(cityList.value))
      }else{
          if(radio.value==='按城市'){
              options.value=JSON.parse(JSON.stringify(cityList.value)).filter((item:cityItem)=>{
                  return item.name!.includes(val) || item.spell!.includes(val)
              })
          }else{
              options.value=JSON.parse(JSON.stringify(cityList.value)).filter((item:cityItem)=>{
                  return item.name!.includes(val)
              })
          }
      }
    }
    const selectChange = (val:number)=>{
        let item=cityList.value.find((item:cityItem)=>item.id===val)
        result.value=item!.name
        visible.value = false
        if(radio.value==='按城市'){
            emits('cityChange', item)
        }else{
            emits('areaChange', item)
        }
    }
</script>

<style scoped lang="scss">
    .icon-label {
        display: flex;
        cursor: pointer;
        width: fit-content;

        .rote {
            transform: rotate(180deg);
        }

        svg {
            width: 1em;
            height: 1em;
            position: relative;
            top: 4px;
            margin-left: 5px;
            transition: all 0.25s linear;
        }
    }

    .popover-con {
        margin-bottom: 16px;
    }

    .popover-con-city {
        display: flex;
        align-items: center;
        flex-flow: wrap;
        margin-top: 10px;
        margin-bottom: 10px;

        .city-item {
            padding: 3px 6px;
            margin-right: 8px;
            border: 1px solid #eee;
            margin-bottom: 8px;
            cursor: pointer;
        }
    }

    .city-con {
        .row-city {
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .city-name {
            display: flex;
            align-items: center;
            flex-flow: wrap;
            cursor: pointer;

            &-item {
                margin-right: 8px;
                margin-bottom: 6px;
            }
        }
    }
</style>