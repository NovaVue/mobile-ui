<script setup lang="ts">
import { computed } from 'vue';
import Value from './Value.vue';
import RiseFall from './RiseFall.vue';
import { isNumber, isRiseFall, type RiseFallProps } from './types';
import type { NumberProps } from './types';
defineOptions({
  name: 'VNumber',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<NumberProps>(), {
  sign: true,
  colourful: ''
});

const _props = computed(() => {
  const sharedProps = {} as RiseFallProps;
  if (isRiseFall(props)) {
    sharedProps.colourful = typeof props.colourful === 'string' ? true : props.colourful;
  }
  console.log('props.value', props.value)
  return {
    ...props,
    ...sharedProps,
  };
});
</script>

<template>
  <Value v-if="isNumber(props)" class="v-number" v-bind="_props"></Value>
  <RiseFall
    v-if="isRiseFall(props)"
    class="v-percent"
    v-bind="_props"
  ></RiseFall>
</template>

<style src="./style.css"></style>

<!--<script setup lang="ts">-->
<!--import { computed } from 'vue';-->
<!--import Text from '../Text/Text.vue';-->
<!--import Value from './Value.vue';-->
<!--import type { NumberProps } from './types.ts';-->
<!--import type { TextProps } from '../Text/types.ts';-->
<!--import { useFilterAttrs } from '../../hooks/useVue.ts';-->

<!--defineOptions({-->
<!--  name: 'VNumber',-->
<!--  inheritAttrs: false,-->
<!--});-->

<!--const attrs = useFilterAttrs();-->

<!--const {-->
<!--  value = '',-->
<!--  size = 'base',-->
<!--  suffix,-->
<!--  weight = '600',-->
<!--  color,-->
<!--} = defineProps<NumberProps>();-->

<!--const valueProps = computed(() => {-->
<!--  return {-->
<!--    ...attrs.value,-->
<!--    size,-->
<!--    weight,-->
<!--    color,-->
<!--    value: _value.value.int,-->
<!--  };-->
<!--});-->

<!--const _value = computed(() => {-->
<!--  const [_int, _dec = null] = `${value}`.split('.');-->
<!--  return {-->
<!--    int: _int,-->
<!--    dec: _dec,-->
<!--  };-->
<!--});-->
<!--const suffixProps = computed(() => {-->
<!--  return {-->
<!--    value: suffix,-->
<!--    size: noScale.includes(`${size}`) ? size : `${size}1.3`,-->
<!--    color: color,-->
<!--    weight: `${(weight as number) - 200}`,-->
<!--  };-->
<!--});-->

<!--const noScale = ['base', 'sm', 'mini'];-->
<!--const decimalProps = computed(() => ({-->
<!--  value: `.${_value.value.dec}`,-->
<!--  size: noScale.includes(`${size}`) ? size : `${size}1.2`,-->
<!--  color: color,-->
<!--  weight: weight,-->
<!--}));-->
<!--</script>-->

<!--<template>-->
<!--  <Text class="v-number" v-bind="valueProps">-->
<!--    <template #suffix>-->
<!--      <Text v-if="_value.dec" v-bind="decimalProps as TextProps" />-->
<!--      <Text-->
<!--        v-if="suffixProps.value"-->
<!--        class="v-number_suffix"-->
<!--        v-bind="suffixProps"-->
<!--      />-->
<!--    </template>-->
<!--  </Text>-->
<!--</template>-->

<!--<style src="./style.css"></style>-->
