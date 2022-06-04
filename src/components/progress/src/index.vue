<template>
    <main>
        <el-progress :percentage="p" v-bind="$attrs"/>
    </main>
</template>

<script lang="ts" setup>
    import{onMounted,ref} from 'vue'
let props=defineProps({
    percentage:{
        type:Number,
        default:100
    },
    isAnimation:{
        type:Boolean,
        default:false
    },
    animationTime:{
        type:Number,
        default:3000
    }
})
    let p=ref(0)
    onMounted(()=>{
        if (props.isAnimation) {
            let time=Math.ceil(props.animationTime/props.percentage)
            let timer=setInterval(()=>{
                p.value+=1
                if( p.value>=props.percentage){
                    p.value=props.percentage
                    clearInterval(timer)
                }
            },time)
        }else{
            p.value=props.percentage
        }

    })
</script>

<style scoped>

</style>