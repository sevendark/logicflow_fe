<template>
  <div>
    <b-row>
      <b-col>
        <tiptap />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Tiptap from '@/components/Tiptap.vue'
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
    },
    components: {
      Tiptap
    },
    mounted: function() {
        let a = {
          render: {
            modes: function (button, id) {
              switch(id) {
                case 'wysiwyg': 
                  button.className = 'd-none';
                  break;
              }
            },
            commands: function (button, id) {
              switch(id) {
                case 'bold': 
                  button.className = 'btn btn-outline-primary';
                  button.innerHTML ='<i class="fas fa-bold"></i>'
                break;
                case 'italic': 
                  button.className = 'btn btn-outline-primary';
                  button.innerHTML ='<i class="fas fa-italic"></i>'
                break;
                case 'quote': 
                  button.className = 'btn btn-outline-primary';
                  button.innerHTML ='<i class="fas fa-quote-right"></i>'
                break;
                case 'code': 
                  button.className = 'btn btn-outline-primary';
                  button.innerHTML ='<i class="fas fa-code"></i>'
                break;
                case 'ol': 
                  button.className = 'btn btn-outline-primary';
                  button.innerHTML ='<i class="fas fa-list-ol"></i>'
                break;
                case 'ul': 
                  button.className = 'btn btn-outline-primary';
                  button.innerHTML ='<i class="fas fa-list-ul"></i>'
                break;
                case 'heading': 
                  button.className = 'btn btn-outline-primary';
                  button.innerHTML ='<i class="fas fa-heading"></i>'
                break;
                case 'link': 
                  button.className = 'btn btn-outline-primary';
                  button.innerHTML ='<i class="fas fa-link"></i>'
                break;
                case 'image': 
                  button.className = 'btn btn-outline-primary';
                  button.innerHTML ='<i class="fas fa-images"></i>'
                break;
                case 'attachment': 
                  button.className = 'btn btn-outline-primary';
                  button.innerHTML ='<i class="fas fa-paperclip"></i>'
                break;
              }
            }
          }
        }
    },
    methods: {
    }
  }
</script>
