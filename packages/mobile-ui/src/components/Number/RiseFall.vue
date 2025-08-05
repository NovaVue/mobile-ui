<script setup lang="ts">
import { computed, reactive } from 'vue';
import type { RiseFallProps } from './types';
import Value from './Value.vue';
import { isEmpty } from '../../utils';
import { useFilterAttrs } from '../../hooks/useVue';

defineOptions({
  name: 'VPercent',
  inheritAttrs: false,
});
const attrs = useFilterAttrs();
const defaultColor = '#262626';
const defaultUpColor = '#F64D42';
const defaultDownColor = '#25975B';
const {
  value,
  defaultValue = '-',
  colourful = true,
  color,
  size = 'sm',
  sign = false,
  weight = '500',
  upColor = defaultUpColor,
  downColor = defaultDownColor,
  suffix = '%',
} = defineProps<RiseFallProps>();
const valueOpt = reactive({
  value: '',
  suffix: '',
});
const computeValue = computed(() => {
  if (isEmpty(value)) {
    valueOpt.suffix = '';
    valueOpt.value = defaultValue;
  } else {
    const numberValue = value as number;
    valueOpt.suffix = suffix;
    if (sign) {
      valueOpt.value =
        numberValue > 0
          ? `+${numberValue}`
          : numberValue === 0
            ? '0'
            : `${numberValue}`;
    } else {
      valueOpt.value = `${Math.abs(numberValue)}`;
    }
  }
  return valueOpt;
});

const valueProps = computed(() => {
  const colorProps = {
    color: color,
  };
  if (`${value}` === '0') {
    colorProps.color = defaultColor;
  }

  if ((value as number) > 0) {
    colorProps.color = upColor || defaultUpColor;
  }

  if ((value as number) < 0) {
    colorProps.color = downColor || defaultDownColor;
  }

  return {
    ...attrs.value,
    ...(colourful ? colorProps : { color }),
    colourful,
    value: computeValue.value.value,
    suffix: computeValue.value.suffix,
    size,
    weight,
  };
});
</script>

<template>
  <Value class="v-percent" v-bind="valueProps"></Value>
</template>

<style src="./style.css" scoped></style>
