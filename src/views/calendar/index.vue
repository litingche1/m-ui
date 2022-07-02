<template>
    <m-calendar :events="events"  @date-click="dateClick" @event-click="eventClick"></m-calendar>
</template>

<script lang="ts" setup>
    import { DateClickArg } from '@fullcalendar_interaction@5.10.1@@fullcalendar/interaction';
    import { EventItem } from '../../components/calendar/src/type'
    import { ref } from 'vue';
    import { EventContentArg } from '@fullcalendar/core';

    let events = ref<EventItem[]>([
        {
            title: '购物',
            start: '2022-07-11 10:00:00',
            end: '2022-07-11 12:00:00',
            editable: true
        },
        {
            title: '学习',
            start: '2022-07-15 08:00:00',
            end: '2022-07-15 16:00:00'
        }
    ])
    let dateClick = (info: DateClickArg) => {
        let event = {
            start: `${info.dateStr} 12:00:00`,
            end: `${info.dateStr} 13:00:00`,
            title: '吃饭'
        }
        events.value.push(event)
        console.log(info.dateStr)
    }
    let eventClick=(info: EventContentArg)=>{
        console.log(info)
    }
</script>

<style scoped>

</style>