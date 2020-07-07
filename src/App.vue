<template>
     <b-container fluid>
      <b-row>
        <b-col><NavBar /></b-col>
      </b-row>
      <b-row>
        <b-col><router-view /></b-col>
      </b-row>
      <b-row>
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