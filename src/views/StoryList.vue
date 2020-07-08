<template>
<div >
  <b-row>
    <b-col><QBar :finished="finished"/></b-col>
  </b-row>
  <b-row  class="mt-2">
    <b-col><StoryListTable /></b-col>
  </b-row>
</div>
</template>

<script>
import QBar from '@/components/QBar.vue'
import StoryListTable from '@/components/StoryListTable.vue'

export default {
  data: function() {
     return {
        finished: [2, 3, 1, 5],
     }
  },
  components : {
    QBar, StoryListTable
  }  
}
</script>
