// declare module '*.vue' {
//   import Vue from 'vue'
//   export default Vue
// }

declare module "*.vue" {
  import {defineComponent} from '@vue/composition-api'
  const Component: ReturnType<typeof defineComponent>;
  export default Component
}
