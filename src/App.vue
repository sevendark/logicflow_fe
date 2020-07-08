<template>
     <b-container fluid>
      <b-row align-v="start">
        <b-col><NavBar /></b-col>
      </b-row>
      <b-row align-v="center" class="mt-2">
        <b-col ><router-view /></b-col>
      </b-row>
      <b-row align-v="end" class="mt-2">
        <b-col><TimeLine/></b-col>
      </b-row>
    </b-container>
</template>

<script>
import TimeLine from '@/components/TimeLine.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    TimeLine,
    NavBar
  }
}
</script>