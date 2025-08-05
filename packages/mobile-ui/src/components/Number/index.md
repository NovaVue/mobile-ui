---
group: 基础
mobile: true
---
# Number 数字

## 使用
```vue
<script lang="ts" setup>
  import { VNumber } from '@novavue/mobile-ui';
</script>
<template>
  <VNumber value="1000.99" suffix="万元" size="mini" weight="500"></VNumber>
</template>
```

## 源码
::: code-group
<<< @/packages/mobile-ui/src/components/Number/Number.vue [Number]
<<< @/packages/mobile-ui/src/components/Number/types.ts [Number Types]
<<< @/packages/mobile-ui/src/components/Text/types.ts [Text Types]
<<< @/packages/mobile-ui/src/types/shared.ts [Shared Types]
<<< @/packages/mobile-ui/src/components/Number/style.css [Css]
<<< @/packages/mobile-ui/src/components/Number/demo/index.vue [Demo]
:::