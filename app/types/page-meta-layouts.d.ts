import type { ComputedRef, MaybeRef } from 'vue'
import type { LayoutKey } from 'nuxt/app'

declare module '#pages/composables' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}

declare module '#app/composables/pages' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}