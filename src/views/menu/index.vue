<template>
    <main>
        <m-infinite-menu :data="data" :defaultActive="$route.path" background-color="red">

        </m-infinite-menu>
<!--        <m-menu :data="data" :defaultActive="$route.path"></m-menu>-->
    </main>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'
import {menuItem} from '../../components/menu/src/type'
    let data=reactive<menuItem[]>([
        {
            name: '导航1',
            index: '1',
            icon: 'Document'
        },
        {
            name: '导航2',
            index: '2',
            icon: 'Document'
        },
        {
            name: '导航3',
            index: '3',
            icon: 'Document',
            children: [
                {
                    name: '导航3-1',
                    index: '3-1',
                    icon: 'Document',
                    children: [
                        {
                            name: '导航3-1-1',
                            index: '3-1-1',
                            icon: 'Document',
                            children: [
                                {
                                    name: '导航3-1-1-1',
                                    index: '3-1-1-1',
                                    icon: 'Document',
                                    children: [
                                        {
                                            name: '导航3-1-1-1-1',
                                            index: '3-1-1-1-1',
                                            icon: 'Document',

                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ])

</script>

<style scoped>

</style>