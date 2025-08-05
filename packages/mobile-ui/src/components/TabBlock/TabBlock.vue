<script setup lang="ts">
import { useAttrs, computed } from 'vue';
import Normal from './Normal.vue';
import Group from './Group.vue';
import Simple from './Simple.vue';
import { isNormal, isGroup, isSimple } from './types.ts';
import type {
  TabBlockProps,
  TabBlockNormalProps,
  TabBlockGroupProps,
  TabBlockSimpleProps,
  TabBlockEmits,
} from './types.ts';
defineOptions({
  name: 'VTabBlock',
});
const attrs = useAttrs();
const props = withDefaults(defineProps<TabBlockProps>(), {
  variant: 'normal',
  theme: 'blue',
});
defineEmits<TabBlockEmits>();
const componentProps = computed(() => ({
  ...attrs,
  ...props,
}));
</script>

<template>
  <Normal
    v-if="isNormal(props)"
    v-bind="componentProps as TabBlockNormalProps"
  ></Normal>
  <Group
    v-if="isGroup(props)"
    v-bind="componentProps as TabBlockGroupProps"
  ></Group>
  <Simple
    v-if="isSimple(props)"
    v-bind="componentProps as TabBlockSimpleProps"
  ></Simple>
</template>

<style scoped></style>
