<template>
    <main>
        <m-choose-time @startTimeChang="startTimeChang" @endTimeChang="endTimeChang">

        </m-choose-time>
    </main>
</template>

<script lang="ts" setup>
    interface endTime{
        endTime:string,
        startTime:string
    }
const startTimeChang=(val:string)=>{
    console.log(val)
}
const endTimeChang=(val:endTime)=>{
    console.log(val)
}
</script>

<style scoped>

</style>