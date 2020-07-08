<template>
    <div>
        <span class="title">Quarter</span>
        <span class="desc"> [ {{ allFinishedCount }}/{{ allStoriesCount }} ]</span>
        <b-progress height="1rem" class="mb-1" show-value >
            <b-progress-bar v-for="i in [0, 1, 2, 3]" :key="i" :value="40" :variant="qColor[i]">
              Q{{ i + 1 }} [ {{ finished[i]}}/{{ qData[i] }} ]
            </b-progress-bar>
        </b-progress>
        <span class="title">Time Persent Of <span class="q">Q{{ currQuarter }}</span></span>
        <span class="desc"> [ {{ dateTime }} ({{ currDays }}/{{ quarterDays }}) ]</span>
        <b-progress height="0.5rem" class="mb-1" :max="quarterDays" :value="currDays" animated></b-progress>
        <span class="title">Finished Stories In <span class="q">Q{{ currQuarter }}</span></span> 
        <span class="desc"> [ {{ currQFinished }}/{{ currentTotlCount }} ]</span>
        <b-progress height="0.5rem" class="mb-1" :max="currentTotlCount" :value="currQFinished" variant="success" animated></b-progress>
    </div>
</template>

<script>
  export default {
    props: {
      finished: Array,
    },
    data: function() {
      return {
        qData: [12, 9, 11, 15],
        qColor: [],
      }
    },
    computed: {
      currQuarter: function(){
        const now = new Date();
        const currMonth = now.getMonth() + 1;
        return Math.floor( ( currMonth % 3 == 0 ? ( currMonth / 3 ) : ( currMonth / 3 + 1 ) ) ) ;
      },
      currQFinished: function() {
        return this.finished[this.currQuarter - 1];
      },
      allStoriesCount: function() {
        var sum = 0;
        for(var c in this.qData){
          sum += this.qData[c];
        }
        return sum;
      },
      allFinishedCount: function(){
        var sum = 0;
        for(var c in this.finished){
          sum += this.finished[c];
        }
        return sum;
      },
      quarterDays: function() {
        const currYear = new Date().getFullYear();
        const qurStart = new Date(currYear, (this.currQuarter - 1 ) * 3, 1);
        const qurEnd = new Date(currYear, this.currQuarter * 3, 1);
        const mills = qurEnd - qurStart;
        return Math.ceil(mills / (24 * 60 * 60 * 1000));
      },
      currDays : function() {
        const now = new Date();
        const currYear = now.getFullYear();
        const mills = new Date() - new Date(currYear, (this.currQuarter - 1 ) * 3, 1);
        return Math.ceil(mills / (24 * 60 * 60 * 1000));
      },
      dateTime: function(){
        const date = new Date();

        const year = date.getFullYear(),
            month = date.getMonth()+1,
            day = date.getDate();

        return year + '-' +
                    (month < 10? '0' + month : month) + '-' +
                    (day < 10? '0' + day : day);
      },
      currentTotlCount: function() {
        return this.qData[this.currQuarter - 1];
      },
    },
    created: function() {
       for(var i = 0; i < 4; i ++) {
         if(this.currQuarter - 1 == i){
          this.qColor[i] = 'dark'
         } else {
          this.qColor[i] = 'secondary'
         }
       }
    },
  }
</script>

<style scoped>
.desc {
 font-size: 0.5em;
}
.title {
 font-size: 1.2em;
 font-weight: 400;
}
.q {
  font-weight: 500;
}
</style>