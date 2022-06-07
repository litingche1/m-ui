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
                    <el-select v-model="value" class="m-2" placeholder="Select">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                        />
                    </el-select>
                </el-col>
            </el-row>
        </article>
        <article class="popover-con-city">
            <div class="city-item" v-for="(value,key) in citys" :key="key">{{key}}</div>
        </article>
        <el-scrollbar max-height="400px">
            <article class="city-con">
                <template v-for="(value,key) in citys" :key="key">
                    <el-row class="row-city">
                        <el-col :span="2">
                            {{key}}:
                        </el-col>
                        <el-col :span="22" class="city-name">
                            <div v-for="item in value" :key="item.id" class="city-name-item">
                                {{item.name}}
                            </div>
                        </el-col>
                    </el-row>
                </template>

            </article>
        </el-scrollbar>

    </el-popover>
</template>

<script lang="ts" setup>

    import {ref} from 'vue'
    import city from '../lib/city'

    let result = ref('请选择')
    let radio = ref('按城市')
    let value = ref('')
    let visible = ref(false)
    let citys = ref(city.cities)
    const options = [
        {
            value: 'Option1',
            label: 'Option1',
        },
        {
            value: 'Option2',
            label: 'Option2',
        },
        {
            value: 'Option3',
            label: 'Option3',
        },
        {
            value: 'Option4',
            label: 'Option4',
        },
        {
            value: 'Option5',
            label: 'Option5',
        },
    ]
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