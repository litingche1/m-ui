<template>
    <main>
        <section>
            <m-notice :value="50" :max="30">
                <template #default>
                    <m-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></m-list>
                </template>
            </m-notice>
        </section>

    </main>

</template>

<script lang="ts" setup>
import{list,actions} from './data'
    let clickItem=(data:Object)=>{
    console.log(data)
    }
let clickAction=(data:Object)=>{
    console.log(data)
}
</script>

<style scoped>

</style>