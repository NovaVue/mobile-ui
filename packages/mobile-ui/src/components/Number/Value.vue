<script setup lang="ts">
import { computed } from 'vue';
import Text from '../Text/Text.vue';
import type { ValueProps } from './types.ts';
import type { TextProps } from '../Text/types.ts';
import { useFilterAttrs } from '../../hooks/useVue.ts';

defineOptions({
  name: 'VValue',
  inheritAttrs: false,
});

const attrs = useFilterAttrs();

const {
  value,
  size = 'base',
  suffix,
  weight = '600',
  color,
} = defineProps<ValueProps>();

const valueProps = computed(() => {
  console.log('attrs', attrs.value);
  return {
    ...attrs.value,
    size,
    weight,
    color,
    value: _value.value.int,
  };
});

const _value = computed(() => {
  const [_int, _dec = null] = `${value}`.split('.');
  return {
    int: _int,
    dec: _dec,
  };
});

const suffixNoSpacing = ['sm', 'mini'];
const suffixProps = computed(() => {
  return {
    value: suffix,
    size: noScale.includes(`${size}`) ? size : `${size}1.3`,
    color: color,
    weight: `${(weight as number) - 200}`,
    class: {
      'v-value_suffix': !suffixNoSpacing.find(item => `${size}`.includes(item)),
    },
  };
});

const noScale = ['base', 'sm', 'mini'];
const decimalProps = computed(() => ({
  value: `.${_value.value.dec}`,
  size: noScale.find(item => item.includes(`${size}`)) ? size : `${size}1.2`,
  color: color,
  weight: weight,
}));
</script>

<template>
  <Text class="v-value" v-bind="valueProps" >
    <template #suffix>
      <Text v-if="_value.dec" v-bind="decimalProps as TextProps" />
      <Text v-if="suffixProps.value" v-bind="suffixProps" />
    </template>
  </Text>
</template>

<style src="./style.css"></style>
