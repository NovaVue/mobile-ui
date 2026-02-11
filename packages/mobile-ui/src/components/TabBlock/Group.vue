<script setup lang="ts">
import Text from '../Text/Text.vue';
import Number from '../Number/Number.vue';
import type { Main, TabBlockGroupProps } from './types.ts';
const { columns = [] } = defineProps<TabBlockGroupProps>();

const mainNameProps = (main: Main) => {
  return {
    ...main,
    value: main.name,
  };
};
</script>

<template>
  <div class="v-tab-block v-tab-block_group">
    <div
      class="v-tab-block_group-columns"
      v-for="(col, idx) in columns"
      :key="idx"
    >
      <div
        class="v-tab-block_group-columns_main"
        v-for="(main, mIdx) in col.main"
        :key="mIdx"
      >
        <Text v-bind="mainNameProps(main)"></Text>

      </div>
    </div>
  </div>
</template>

<style scoped></style>
