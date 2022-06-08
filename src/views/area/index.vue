<template>
    <main>
        <m-choose-area @cityChange="cityChange" @areaChange="areaChange"></m-choose-area>
    </main>
</template>

<script lang="ts" setup>
    import {cityItem, areaItem} from '../../components/chooseCitys/src/type'

    const cityChange = (val: cityItem) => {
        console.log(val)
    }
    const areaChange = (val: areaItem) => {
        console.log(val)
    }
</script>

<style scoped lang="scss">
</style>