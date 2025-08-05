---
group: 基础
mobile: true
---

# Title 标题

## 使用

```vue
<script lang="ts" setup>
import { VTitle } from '@novavue/mobile-ui';
</script>
<template>
  <VTitle <VTitle title="收入" suffix="单位：万元"> </VTitle>></VTitle>
</template>
```

## 源码

::: code-group
<<< @/packages/mobile-ui/src/components/Title/Title.vue [Percent]
<<< @/packages/mobile-ui/src/components/Title/types.ts [Props]
<<< @/packages/mobile-ui/src/components/Title/style.css [Css]
<<< @/packages/mobile-ui/src/components/Title/demo/index.vue [Demo]
:::
