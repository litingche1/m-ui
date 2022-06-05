<template>
    <main class="choose-time">
        <section class="start-date">
            <el-time-select
                    v-model="startTime"
                    :max-time="endTime"
                    class="mr-4"
                    :placeholder="startPlaceholder"
                    :start="start"
                    :step="startStep"
                    :end="startEndTime"
            />
        </section>
        <section>
            <el-time-select
                    v-model="endTime"
                    :min-time="startTime"
                    :placeholder="endPlaceholder"
                    :start="endStartTime"
                    :step="endStep"
                    :end="endEndTime"
                    :disabled="endStatus"
            />
        </section>

    </main>
</template>

<script lang="ts" setup>
    import {ref,watch} from 'vue'
let props=defineProps({
    startPlaceholder:{
        type:String,
        default:'请选择开始时间'
    },
    start:{
        type:String,
        default:'08:30'
    },
    startStep:{
        type:String,
        default:'00:30'
    },
    startEndTime:{
        type:String,
        default:'24:00'
    },
    endPlaceholder:{
        type:String,
        default:'请选择结束时间'
    },
    endStartTime:{
        type:String,
        default:'08:30'
    },
    endStep:{
        type:String,
        default:'00:30'
    },
    endEndTime:{
        type:String,
        default:'24:00'
    }
})
    let emits=defineEmits(['startTimeChang','endTimeChang'])
    let endStatus=ref<Boolean>(true)
    let startTime = ref<String>('')
    let endTime = ref<String>('')
    watch(startTime,val=>{
        if(val===''){
            endTime.value=''
            endStatus.value=true
        }else{
            endStatus.value=false
            emits('startTimeChang',val)
        }
    })
    watch(endTime,val=>{
        if(val){
            emits('endTimeChang',{
                endTime:val,
                startTime:startTime.value
            })
        }
    })
</script>

<style scoped lang="scss">
    .choose-time {
        display: flex;

        .start-date {
            margin-right: 20px;
        }
    }
</style>