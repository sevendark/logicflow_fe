<template>
  <div class="tableContent" @scroll="this.keepHead">
    <table class="table table-hover table-bordered table-sm">
      <thead>
      <tr>
        <th v-for="h in fields" :key="h.key" :width="h.width">{{ h.label }}</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="8" class="group">Name</td>
          <td colspan="3" class="group"></td>
        </tr>
        <tr v-for="item in items" :key="item.index" >
          <td v-for="h in fields" :key="h.key" :class="cellStyle(item, h.key)">{{ cellValue(item, h.key) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.storyName {
  text-align: center;
}
.status {
  color: white;
  text-align: center;
  font-weight: 500;
  font-size: 0.6em;
}
.status-done {
 background-color: #92D050;
}
.status-avaliable {
 background-color: #9BC2E6;
}
.status-inprogress {
 background-color: #FFD966;
}
.status-none {
  background-color: #BFBFBF;
}
.platorm {
  color: white;
  text-align: center;
  font-weight: 600;
}
.platorm-web {
  background-color: #5B9BD5;
}
.platorm-backend {
  background-color: #FFC000;
}
.platorm-mobile {
  background-color: #7030A0;
}
.group{
  text-align: center;
  background-color: #D9D9D9;
  font-weight: 600;
}
thead {
  background-color: #305496;
  color: white;
  text-align: center;
}
table {
  width: 180%;
}
.tableContent {
  overflow: scroll;
  height: 30em;
}
</style>

<script>
  export default {
    data() {
      return {
        fields: [
          { key: 'platorm', label: 'Platorm', width: '' },
          { key: 'storyName', stickyColumn: true, label: 'Story Name', width: '20%' },
          { key: 'specs', label: 'Specs', width: '' },
          { key: 'development', label: 'Development', width: '' },
          { key: 'codeReview', label: 'Code Review', width: '' },
          { key: 'productReview', label: 'Product Review', width: '' },
          { key: 'qaReview', label: 'QA Review', width: '' },
          { key: 'deployed', label: 'Deployed', width: '' },
          { key: 'assignee', label: 'Assignee', width: '' },
          { key: 'plannedRelease', label: 'Planned Release', width: '' },
          { key: 'notes', label: 'Notes', width: '35%' },
        ],
        items: [
          { platorm: 'Mobile', storyName: 'Rich Notification', specs: { finished: 23, total: 23}, 
          development: { finished: 10, total: 23}, codeReview: { finished: 0, total: 0},
          productReview: { finished: 0, total: 0}, qaReview: { finished: 0, total: 0}, 
          deployed: { finished: 0, total: 0} , assignee: { userId: 1, userName: 'Timothy Ji'},
          plannedRelease: 1594269513453, notes: 'https://eventbank.quip.com/GFDLABG98Gb5/Events-' },
          { platorm: 'Backend', storyName: 'Rich Notification', specs: { finished: 23, total: 23}, 
          development: { finished: 23, total: 23}, codeReview: { finished: 23, total: 23},
          productReview: { finished: 23, total: 23}, qaReview: { finished: 23, total: 23}, 
          deployed: { finished: 23, total: 23} , assignee: { userId: 1, userName: 'Timothy Ji'},
          plannedRelease: 1594269513453, notes: 'https://eventbank.quip.com/GFDLABG98Gb5/Events-' },
          { platorm: 'Web', storyName: 'Rich Notification', specs: { finished: 23, total: 23}, 
          development: { finished: 0, total: 23}, codeReview: { finished: 0, total: 0},
          productReview: { finished: 0, total: 0}, qaReview: { finished: 0, total: 0}, 
          deployed: { finished: 0, total: 0} , assignee: { userId: 1, userName: 'Timothy Ji'},
          plannedRelease: 1594269513453, notes: 'https://eventbank.quip.com/GFDLABG98Gb5/Events-' },
          { platorm: 'Web', storyName: 'Rich Notification', specs: { finished: 23, total: 23}, 
          development: { finished: 0, total: 23}, codeReview: { finished: 0, total: 0},
          productReview: { finished: 0, total: 0}, qaReview: { finished: 0, total: 0}, 
          deployed: { finished: 0, total: 0} , assignee: { userId: 1, userName: 'Timothy Ji'},
          plannedRelease: 1594269513453, notes: 'https://eventbank.quip.com/GFDLABG98Gb5/Events-' },
          { platorm: 'Web', storyName: 'Rich Notification', specs: { finished: 23, total: 23}, 
          development: { finished: 0, total: 23}, codeReview: { finished: 0, total: 0},
          productReview: { finished: 0, total: 0}, qaReview: { finished: 0, total: 0}, 
          deployed: { finished: 0, total: 0} , assignee: { userId: 1, userName: 'Timothy Ji'},
          plannedRelease: 1594269513453, notes: 'https://eventbank.quip.com/GFDLABG98Gb5/Events-' },
          { platorm: 'Web', storyName: 'Rich Notification', specs: { finished: 23, total: 23}, 
          development: { finished: 0, total: 23}, codeReview: { finished: 0, total: 0},
          productReview: { finished: 0, total: 0}, qaReview: { finished: 0, total: 0}, 
          deployed: { finished: 0, total: 0} , assignee: { userId: 1, userName: 'Timothy Ji'},
          plannedRelease: 1594269513453, notes: 'https://eventbank.quip.com/GFDLABG98Gb5/Events-' },
          { platorm: 'Web', storyName: 'Rich Notification', specs: { finished: 23, total: 23}, 
          development: { finished: 0, total: 23}, codeReview: { finished: 0, total: 0},
          productReview: { finished: 0, total: 0}, qaReview: { finished: 0, total: 0}, 
          deployed: { finished: 0, total: 0} , assignee: { userId: 1, userName: 'Timothy Ji'},
          plannedRelease: 1594269513453, notes: 'https://eventbank.quip.com/GFDLABG98Gb5/Events-' },
        ]
      }
    },
    methods: {
      cellStyle: function(item, key) {
        switch(key){
          case 'platorm' : return 'platorm platorm-' + item[key].toLowerCase();
          case 'specs':
          case 'development':
          case 'codeReview':
          case 'productReview':
          case 'qaReview':
          case 'deployed': 
          const finished = item[key].finished;
          const total = item[key].total;
          var clzz = 'status '
          if(total == 0) {
            clzz += 'status-none';
          } else if(total != 0 && finished > 0 && finished < total){
            clzz += 'status-inprogress';
          } else if(total != 0 && finished == total){
            clzz += 'status-done';
          } else if(total != 0 && finished == 0){
            clzz += 'status-avaliable';
          }
          return clzz;
          case 'storyName': return 'storyName';
        }
        return '';
        
      },
      cellValue: function(item, key){
        switch(key) {
          case 'specs':
          case 'development':
          case 'codeReview':
          case 'productReview':
          case 'qaReview':
          case 'deployed': 
          const finished = item[key].finished;
          const total = item[key].total;
          var desc = ''
          if(total == 0) {
            desc = 'None';
          } else if(total != 0 && finished > 0 && finished < total){
            desc = 'In Progress';
          } else if(total != 0 && finished == total){
            desc = 'Done';
          } else if(total != 0 && finished == 0){
            desc = 'Avaliable';
          }
          return desc + ' [' + finished +'/' + total + ']';
          case 'assignee': return item[key].userName;
          case 'plannedRelease': return new Date(item[key]).getFullYear();
        }
        return item[key];
      },
      keepHead: function(event) {
            var scrollTop = event.target.scrollTop;
            event.target.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
      }
    }
  }
</script>
