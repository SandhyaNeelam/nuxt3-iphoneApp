import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "sidebar"
declare module "C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}