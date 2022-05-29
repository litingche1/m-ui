<template>
    <main class="trend-con">
        <article>
            <div>
                <m-trend text="财富">32132</m-trend>
            </div>
            <div>
                <m-trend text="财富" type="down" reverseColor="true"></m-trend>
            </div>
        </article>

    </main>
</template>

<script lang="ts" setup>

</script>

<style scoped langg="scss">
    article {
        display: flex;

    div {
        margin-right: 10px;
    }

    }
</style>