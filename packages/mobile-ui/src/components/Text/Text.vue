<script lang="ts" setup>
import { computed } from 'vue';
import type { CSSProperties } from 'vue';
import type { TextProps, TextSlots } from './types.ts';

defineOptions({
  name: 'VText',
});

/*5,6为预留颜色值*/
const colors: Array<string> = [
  'dark-6',
  'dark-5',
  'dark-4',
  'dark-3',
  'dark-2',
  'dark-1',
  'normal',
  'medium',
  'light-1',
  'light-2',
  'light-3',
  'light-4',
  'light-5',
  'light-6',
];
const weights: Array<string | number> = [
  100, 200, 300, 400, 500, 600, 700, 800, 900,
];
/*Props*/
const {
  value,
  size = 'base',
  weight = '500',
  color = 'normal',
} = defineProps<TextProps>();

/*Slots*/
defineSlots<TextSlots>();

/*text class*/
const classes = computed(() => {
  const sizeClass = `${size}`.replace(/(\d+)\.(\d+)/g, '-$1_$2');
  return [
    [`v-text-${sizeClass}`, `v-text-${weight}`],
    { [`v-text-${color}`]: colors.includes(color) },
  ];
});

/*text style*/
const styles = computed(() => {
  const styles: CSSProperties = {};
  if (color && !colors.includes(color)) {
    styles.color = color;
  }

  if (weight && !weights.includes(weight)) {
    styles.fontWeight = weight;
  }
  return styles;
});
</script>
<template>
  <span class="v-text" :class="classes" :style="styles">
    <slot name="prefix"></slot>
    <slot></slot>
    <span v-if="value">{{ value }}</span>
    <slot name="suffix"></slot>
  </span>
</template>

<style src="./style.css"></style>
