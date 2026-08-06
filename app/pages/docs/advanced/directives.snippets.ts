type DirectivesCodeSnippet = {
  label?: string
  code: string
  language: 'bash' | 'ts' | 'js' | 'vue' | 'scss' | 'json' | 'html' | 'css' | 'shell' | 'sh'
}

export const directivesCodeSnippets: Record<
  | 'ripple'
  | 'click-outside-basic'
  | 'click-outside-advanced'
  | 'focus-outside-basic'
  | 'focus-outside-advanced',
  DirectivesCodeSnippet[]
> = {
  ripple: [
    {
      label: 'Button with ripple options',
      code: '<template>\n  <button\n    v-ripple="{ color: \"var(--e-color-primary)\", center: true, keyboard: true }"\n    class="cta-button"\n  >\n    Save changes\n  </button>\n</template>',
      language: 'html',
    },
  ],
  'click-outside-basic': [
    {
      label: 'Close dropdown when user clicks outside',
      code: '<template>\n  <div v-click-outside="onOutsideClick" class="dropdown">\n    <button @click="open = !open">Actions</button>\n    <ul v-if="open">\n      <li>Edit</li>\n      <li>Delete</li>\n    </ul>\n  </div>\n</template>\n\n<script setup lang="ts">\nconst open = ref(false)\nconst onOutsideClick = () => {\n  open.value = false\n}\n</script>',
      language: 'html',
    },
  ],
  'click-outside-advanced': [
    {
      label: 'Keep trigger button inside include list',
      code: '<template>\n  <button ref="trigger" @click="open = !open">Toggle panel</button>\n\n  <section\n    v-if="open"\n    v-click-outside="{\n      handler: onOutsideClick,\n      include: trigger,\n      enabled: open,\n    }"\n  >\n    Panel content\n  </section>\n</template>\n\n<script setup lang="ts">\nconst open = ref(false)\nconst trigger = ref<HTMLElement | null>(null)\n\nconst onOutsideClick = () => {\n  open.value = false\n}\n</script>',
      language: 'html',
    },
  ],
  'focus-outside-basic': [
    {
      label: 'Validate field group when focus leaves it',
      code: '<template>\n  <div v-focus-outside="onFocusLeave">\n    <input v-model="email" type="email" />\n    <input v-model="confirm" type="email" />\n  </div>\n</template>\n\n<script setup lang="ts">\nconst email = ref(\"\")\nconst confirm = ref(\"\")\n\nconst onFocusLeave = () => {\n  // Run delayed validation here\n}\n</script>',
      language: 'html',
    },
  ],
  'focus-outside-advanced': [
    {
      label: 'Keep teleported helper inside focus boundary',
      code: '<template>\n  <div\n    v-focus-outside="{\n      handler: onFocusOutside,\n      include: [helperContent],\n      enabled: open,\n    }"\n  >\n    <button @click="open = !open">Open helper</button>\n  </div>\n\n  <div ref="helperContent" v-if="open">\n    Helper panel content\n  </div>\n</template>\n\n<script setup lang="ts">\nconst open = ref(false)\nconst helperContent = ref<HTMLElement | null>(null)\n\nconst onFocusOutside = () => {\n  open.value = false\n}\n</script>',
      language: 'html',
    },
  ],
}
