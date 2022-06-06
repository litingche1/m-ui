<template>
    <main>
        <m-choose-time @startTimeChang="startTimeChang" @endTimeChang="endTimeChang">

        </m-choose-time>
<br/>
        <br/>
        <m-choose-date @startDate="startDate" @endDate="endDate">

        </m-choose-date>
    </main>
</template>

<script lang="ts" setup>
    interface endTime{
        endTime:string,
        startTime:string
    }
    interface endDate{
        startDate:Date | null,
        endDate:Date | null
    }
const startTimeChang=(val:string)=>{
    console.log(val)
}
const endTimeChang=(val:endTime)=>{
    console.log(val)
}
    const startDate=(val:string)=>{
        console.log(val)
    }
    const endDate=(val:endTime)=>{
        console.log(val)
    }
</script>

<style scoped>

</style>