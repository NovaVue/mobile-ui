---
group: 基础
mobile: true
---

# Text 文本

## 使用

```vue
<script setup lang="ts">
import { VText } from '@novavue/mobile-ui';
</script>
<template>
  <VText value="文本sm" size="sm" color="1" weight="bold"></VText>
</template>
```

## 源码

::: code-group
<<< @/packages/mobile-ui/src/components/Text/Text.vue [Text]
<<< @/packages/mobile-ui/src/components/Text/types.ts [Text Types]
<<< @/packages/mobile-ui/src/components/Text/style.css [Css]
<<< @/packages/mobile-ui/src/components/Text/demo/index.vue [Demo]
:::
