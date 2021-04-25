<template>
<div>
    <b-row>
        <b-col v-if="editor">
            <b-button variant="outline-primary" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
                <font-awesome-icon icon="bold" />
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
                <font-awesome-icon icon="italic" />
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
                <font-awesome-icon icon="strikethrough" />
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
                <font-awesome-icon icon="code" />
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().unsetAllMarks().run()">
                clear marks
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().clearNodes().run()">
                clear nodes
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
                <font-awesome-icon icon="paragraph" />
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                <font-awesome-icon icon="heading" />1
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                <font-awesome-icon icon="heading" />2
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                <font-awesome-icon icon="heading" />3
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
                <font-awesome-icon icon="list-ul" />
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
                <font-awesome-icon icon="list-ol" />
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
                code block
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
                <font-awesome-icon icon="quote-right" />
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().setHorizontalRule().run()">
                horizontal rule
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().setHardBreak().run()">
                hard break
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().undo().run()">
                <font-awesome-icon icon="undo" />
            </b-button>
            <b-button variant="outline-primary" @click="editor.chain().focus().redo().run()">
                <font-awesome-icon icon="redo" />
            </b-button>
        </b-col>
    </b-row>
    <b-row>
        <b-col>
              <editor-content :editor="editor" />
        </b-col>
    </b-row>
</div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import { defaultExtensions } from '@tiptap/starter-kit'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBold, faItalic, faQuoteRight, faCode, 
faHeading, faLink, faImages, faPaperclip, faListOl,
faListUl, faStrikethrough, faRedo, faUndo, faParagraph } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faBold )
library.add( faItalic )
library.add( faQuoteRight )
library.add( faCode )
library.add( faHeading )
library.add( faLink )
library.add( faImages )
library.add( faPaperclip )
library.add( faListOl )
library.add( faListUl )
library.add( faStrikethrough )
library.add( faRedo )
library.add( faUndo )
library.add( faParagraph )

export default {
  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      content: '<p>I’m running tiptap with Vue.js. 🎉</p>',
      extensions: defaultExtensions(),
    })
  },
  components: {
    EditorContent, FontAwesomeIcon
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>



<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }
}
</style>