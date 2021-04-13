<template>
  <div>
    <b-row>
      <b-col><b-button variant="outline-primary">Create Requirement +</b-button></b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col></b-col>
      <b-col>
        <b-form-group class="mb-0" >
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              placeholder="Type To Search Requirement Name"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col>
        <b-table striped hover small :items="items"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :filterIncludedFields="filterOn"
        @filtered="onFiltered">
          <template v-slot:cell(requirementName)="data">
            <router-link :to="{ name: 'RequirementDetail', params: { requirementId: data.item.id }}">{{ data.value }}</router-link>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col>
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        filter: null,
        filterOn: [ 'requirementName' ],
        items: [
          { id: 1, requirementName: 'Rich Notification', creatorName : 'Timothy'},
          { id: 2, requirementName: 'Survey Module', creatorName : 'Peiqing' },
          { id: 3, requirementName: 'CPD/CPE', creatorName : 'Nasir' },
          { id: 4, requirementName: 'Membership Community', creatorName : 'Ivy' }
        ]
      }
    },
    methods: {
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
  }
</script>