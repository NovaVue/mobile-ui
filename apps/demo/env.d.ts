/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

// declare module '@novavue/mobile-ui/demo' {
//   import type { DefineComponent } from 'vue';
//   const component: DefineComponent;
//   // export const VText: component;
//   // export const VWrapper: component;
//   // export const VTitle: component;
//   // export const VPercent: component;
//   // export const VNumber: component;
//   // export const VTabBlock: component;
// }
