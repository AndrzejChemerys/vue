<template>
  <h1>Showing event #{{ event.title }}</h1>
  <!-- <span class="badge -fill-gradient">{{ event.attendees ? event.attendees.length : 0 }}</span> -->
</template>
<script>
import EventService from '@/services/EventService.js'

export default {
  props: ['id'],
  data() {
    return {
      event: {},
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data
      })
      .catch(error => {
        console.log('There was an error: ', error.response)
      })
  },
}
</script>
