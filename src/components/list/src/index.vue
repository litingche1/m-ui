<template>
    <main>
        <section>
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane v-for="(item,idx) in list" :label="item.title" :name="idx">
                    <el-scrollbar max-height="300px">
                        <section>
                            <article class="container"
                                     @click="clickItem(item1, index1)"
                                     v-for="(item1, index1) in item.content"
                                     :key="index1">
                                <div class="avatar" v-if="item1.avatar">
                                    <el-avatar size="small" :src="item1.avatar"></el-avatar>
                                </div>
                                <div class="content">
                                    <div v-if="item1.title" class="title">
                                        <div>{{ item1.title }}</div>
                                        <el-tag v-if="item1.tag" size="small" :type="item1.tagType">{{ item1.tag }}</el-tag>
                                    </div>
                                    <div class="time" v-if="item1.desc">{{ item1.desc }}</div>
                                    <div class="time" v-if="item1.time">{{ item1.time }}</div>
                                </div>
                            </article>
                            <article class="actions">
                                <div
                                        class="a-item"
                                        :class="{ 'border': i !== actions.length }"
                                        v-for="(action, i) in actions"
                                        :key="i"
                                        @click="clickAction(action, i)"
                                >
                                    <div class="a-icon" v-if="action.icon">
                                        <component :is="`el-icon-${toLine(action.icon)}`"></component>
                                    </div>
                                    <div class="a-text">{{ action.text }}</div>
                                </div>
                            </article>
                        </section>
                    </el-scrollbar>
                </el-tab-pane>
            </el-tabs>
        </section>
    </main>
</template>

<script lang="ts" setup>
import{ref,PropType} from 'vue'
import {toLine} from '../../../units';
import {ListOptions,ActionOptions,ListItem} from './type'
let props=defineProps({
    // 列表的内容
    list: {
        type: Array as PropType<ListOptions[]>,
        required: true
    },
    // 操作的内容
    actions: {
        type: Array as PropType<ActionOptions[]>,
        default: () => []
    }
})
let emits = defineEmits(['clickItem','clickAction'])
    let activeName=ref<String>('')
    const handleClick=()=>{

    }
    let clickItem=(item:ListItem,idx:number)=>{
emits('clickItem',{item,idx})
    }
let clickAction=(item:ActionOptions,idx:number)=>{
    emits('clickAction',{item,idx})
}
</script>

<style scoped lang="scss">
    .container {
        display: flex;
        align-items: center;
        padding: 12px 20px;
        cursor: pointer;
    &:hover {
         background: #e6f6ff;
     }
    .avatar {
        flex: 1;
    }
    .content {
        flex: 3;
    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .time {
        font-size: 12px;
        color: #999;
        margin-top: 4px;
    }
    }
    }
    .actions {
        height: 50px;
        display: flex;
        align-items: center;
        border-top: 1px solid #eee;
    .a-item {
        height: 50px;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    .a-icon {
        margin-right: 4px;
        position: relative;
        top: 2px;
    }
    }
    }
    .border {
        border-right: 1px solid #eee;
    }
</style>