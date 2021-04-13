<template>
    <div>
        <b-row>
            <b-col><b-breadcrumb :items="items"></b-breadcrumb></b-col>
        </b-row>
        <b-row>
          <b-col>
            ID: {{ $route.params.requirementId }}
          </b-col>
        </b-row>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Manage Requirements',
            to: { name: 'RequirementMagage' }
          },
          {
            text: 'Requirement Detail',
            active: true
          }
        ]
      }
    }
  }
</script>