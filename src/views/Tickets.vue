<template>
  <div>
    <b-row>
      <b-col>
        <textarea ref="ticketsContent" ></textarea>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import woofmark from 'woofmark'
import megamark from 'megamark'
import domador from 'domador'
var rfence = /(^|\s)md-lang-((?:[^\s]|$)+)/;
var rimage = /^image\/(gif|png|p?jpe?g)$/i;

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
    mounted: function() {
        woofmark(this.$refs.ticketsContent, {
          html:false,
          markdown: false,
          parseMarkdown: megamark,
          parseHTML: this.parseHTML,
          fencing: true,
          defaultMode: 'wysiwyg',
          images: {
            url: '/uploads/images',
            validate: this.imageValidator
          },
          attachments: {
            url: '/uploads/attachments'
          }
        })
    },
    methods: {
       parseHTML: function(value, options) {
        return domador(value, {
          fencing: true,
          fencinglanguage: this.fences,
          markers: options.markers
        });
      },
      fences: function(el) {
        var match = el.firstChild.className.match(rfence);
        if (match) {
          return match.pop();
        }
      },
      imageValidator: function(file) {
        return rimage.test(file.type);
      }
    }
  }
</script>

<style scoped>
.wk-hide {
  display: none !important;
}
.wk-container {
  position: relative;
}
.wk-container-drop {
  display: none;
}
.wk-container-dragging {
  display: block;
}
.wk-wysiwyg-placeholder {
  position: absolute;
  pointer-events: none;
  display: none;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  color: #999;
}
.wk-wysiwyg:empty + .wk-wysiwyg-placeholder {
  display: block;
}
.wk-prompt {
  position: fixed;
  top: 20%;
  left: 2%;
  right: 2%;
  background-color: #dedede;
  color: #555;
  padding: 10px;
  margin: 0 auto;
  max-width: 450px;
}
.wk-prompt-body {
  text-align: left;
}
.wk-prompt-buttons {
  text-align: center;
  margin-top: 20px;
}
.wk-prompt-cancel {
  margin-right: 10px;
  cursor: pointer;
}
.wk-prompt-upload {
  position: relative;
  overflow: hidden;
}
.wk-prompt-browse {
  font-weight: bold;
}
.wk-prompt-dragdrop {
  text-align: center;
  font-style: italic;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
}
.wk-prompt-fileupload {
  position: absolute;
  top: 0;
  left: -200%;
  right: 0;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
}
.wk-dragging {
  position: absolute;
  text-align: center;
  padding: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
}
.wk-prompt-error {
  display: none;
  padding: 10px;
  background-color: rgba(0,0,0,0.1);
}
.wk-prompt-error-show {
  display: block;
}
.wk-prompt-drop,
.wk-prompt-drop-icon,
.wk-prompt-progress {
  display: none;
}
.wk-prompt-upload-dragging .wk-prompt-drop,
.wk-prompt-upload-dragging .wk-prompt-drop-icon {
  display: block;
}
.wk-prompt-upload-dragging .wk-prompt-dragdrop {
  display: none;
}
.wk-prompt-uploading {
  pointer-events: none;
}
.wk-prompt-uploading .wk-prompt-progress {
  display: block;
}
.wk-prompt-uploading .wk-prompt-drop,
.wk-prompt-uploading .wk-prompt-dragdrop {
  display: none;
}
.wk-prompt-progress {
  cursor: not-allowed;
}
</style>