<template>
    <main>
        <m-choose-city @changeCity="changeValue">

        </m-choose-city>
    </main>
</template>

<script lang="ts" setup>
    import mChooseCity from '../../components/chooseCity/src/index.vue'
    let changeValue = (val:Object) => {
        console.log(val)
    }
</script>

<style scoped>

</style>