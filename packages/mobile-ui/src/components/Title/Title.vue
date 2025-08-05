<script setup lang="ts">
import { computed } from 'vue';
import Text from '../Text/Text.vue';
import type { TitleProps } from './types.ts';
defineOptions({
  name: 'VTitle',
});
const {
  title,
  weight = 'bold',
  size = 'base',
  color,
  suffix,
} = defineProps<TitleProps>();

const textProps = computed(() => {
  return {
    value: title,
    weight,
    size,
    color,
  };
});
</script>

<template>
  <Text v-bind="textProps">
    <template #suffix>
      <Text class="v-title-suffix" size="mini" color="lighter">{{ suffix }}</Text>
    </template>
  </Text>
</template>

<style src="./style.css" scoped></style>
