<script setup lang="ts">
import { computed } from 'vue';
import type { SpaceProps } from './types.ts';
defineOptions({
  name: 'VSpace',
});

const { variant = 'column', size = 'base' } = defineProps<SpaceProps>();
const classes = computed(() => [`v-space-${variant}`, `v-space-${size}`]);
</script>

<template>
  <div class="v-space" :class="classes">
    <slot></slot>
  </div>
</template>

<style src="./style.css"></style>
