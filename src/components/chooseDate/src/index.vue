<template>
    <main class="choose-date">
        <section class="date-l">
            <el-date-picker
                    v-model="startDate"
                    type="date"
                    :placeholder="startPlaceholder"
                    :disabled-date="dayDate"
                    :size="size"
                    v-bind="$attrs.startOptions"
            />
        </section>
        <section>
            <el-date-picker
                    v-model="endDate"
                    type="date"
                    :placeholder="endPlaceholder"
                    :size="size"
                    :disabled="disableStatus"
                    :disabled-date="endDateToday"
                    v-bind="$attrs.endOptions"
            />
        </section>
    </main>
</template>

<script lang="ts" setup>
    import { ref,watch } from 'vue'
    let props=defineProps({
        startPlaceholder:{
            type:String,
            default:'请选择开始日期'
        },
        endPlaceholder:{
            type:String,
            default:'请选择结束日期'
        },
        // 是否禁用选择今天之前的日期
        disableToday: {
            type: Boolean,
            default: true
        }
    })
    let emits = defineEmits(['startDate','endDate'])
    let startDate = ref<Date | null>(null)
    let endDate = ref<Date | null>(null)
    let disableStatus = ref<Boolean>(true)
    let dayDate=(time:Date)=>{
        if(props.disableToday){
            return time.getTime() < Date.now() - 1000*60*60*24
        }

    }
    let endDateToday=(time:Date)=>{
        if(startDate.value){
            return time.getTime() <  startDate.value.getTime() + 1000*60*60*24
        }

    }
    watch(startDate,val=>{
        if(!val){
            disableStatus.value=true
        }else{
            disableStatus.value=false
            emits('startDate',val)
        }
        endDate.value=null
    })
    watch(endDate,val=>{
        if(val){
            emits('endDate',{
                startDate:startDate.value,
                endDate:val
            })
        }
    })
</script>

<style scoped>
.choose-date{
    display: flex;
}
    .date-l{
        margin-right: 20px;
    }
</style>