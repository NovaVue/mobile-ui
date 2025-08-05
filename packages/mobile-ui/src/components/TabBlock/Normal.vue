<script setup lang="ts">
import { computed } from 'vue';
import Text from '../Text/Text.vue';
import Number from '../Number/Number.vue';
import Space from '../Space/Space.vue';
import type {
  Main,
  Sub,
  SubObject,
  TabBlockEmits,
  TabBlockNormalColumn,
  TabBlockNormalProps,
} from './types.ts';
import type { TextProps } from '../Text/types.ts';
import { isRiseFall, isNumber, type RiseFallProps } from '../Number/types.ts';
import type { NumberProps } from '../Number/types.ts';
import { isObject } from '../../utils';

const {
  theme = 'blue',
  columns,
  colourful = false,
  data = {},
} = defineProps<TabBlockNormalProps>();
const active = defineModel<string | number>('active');
const emit = defineEmits<TabBlockEmits>();
// provide('data', data);
// provide('theme', theme);
// provide('active', active);
// provide('colourful', colourful);

function handleClick(item: TabBlockNormalColumn) {
  if (active.value !== undefined) {
    active.value = item.key;
    emit('change', item as TabBlockNormalColumn);
  }
}

const classes = computed(() => {
  return (activeKey: string | number) => {
    const isActive = active.value === activeKey;
    return [
      {
        'v-cursor-pointer': active.value !== undefined,
        [`v-theme-color-${theme}`]: isActive,
        'v-tab-block_active': isActive,
        'v-tab-block_base': !isActive,
      },
    ];
  };
});

function getActive(key: string | number) {
  return active.value === key;
}

function getActiveColor(key: string | number) {
  return active.value === key ? 'light' : 'dark';
}

function getColourful(
  openColourful: string | boolean = false,
  itemKey: number | string,
) {
  if (colourful) {
    return true;
  }

  if (!getActive(itemKey)) {
    // 未激活状态
    return openColourful;
  } else {
    return false;
  }
}

const computedColumns = computed(() => {
  return columns.map((column: TabBlockNormalColumn) => ({
    key: column.key,
    main: {
      ...column.main,
      variant: column.main.variant || 'number',
    },
    sub: column.sub,
  })) as TabBlockNormalColumn[];
});

const mainNameProps = (item: TabBlockNormalColumn) => {
  return {
    value: item.main.name,
    color: `${getActiveColor(item.key)}-2`,
    size: item.size || 'sm',
    weight: item.wieght || '400',
  } as TextProps;
};

const mainNumberProps = (item: TabBlockNormalColumn) => {
  if (isRiseFall(item.main)) {
    return {
      sign: item.main.sign || false,
      variant: item.main.variant,
      value: data[item.main.key],
      color: item.main.color || `${getActiveColor(item.key)}-1`,
      size: item.main.size || '2xl',
      weight: item.main.weight || '600',
      suffix: item.main.suffix || '',
      colourful: getColourful(item.main.colourful, item.key),
    } as NumberProps;
  }

  return {
    value: data[item.main.key],
    color: item.main.color || `${getActiveColor(item.key)}-1`,
    size: item.main.size || '2xl',
    weight: item.main.weight || '600',
    suffix: item.main.suffix || '',
  } as NumberProps;
};

const mainSubNameProps = (item: TabBlockNormalColumn) => {
  const mainSub = item.main.number;
  if (mainSub) {
    return {
      weight: '400',
      size: 'sm1.1',
      color: `${getActiveColor(item.key)}-4`,
      value: mainSub.name,
    };
  }
};

const mainSubNumberProps = (
  mainSubNumber: Main['number'],
  itemKey: string | number,
) => {
  if (isRiseFall(mainSubNumber)) {
    return {
      variant: 'rf',
      size: 'sm1.1',
      colourful: getColourful(mainSubNumber.colourful, itemKey),
      weight: '400',
      color: `${getActiveColor(itemKey)}-4`,
      value: data[mainSubNumber.key],
    };
  }
  if (isNumber(mainSubNumber)) {
    return {
      size: 'sm1.1',
      weight: '400',
      color: `${getActiveColor(itemKey)}-4`,
      value: data[mainSubNumber.key],
      suffix: mainSubNumber.suffix,
    };
  }
};

const subNameProps = (sub: Sub, itemKey: string | number) => {
  return {
    value: sub.name,
    size: sub.size || 'sm',
    color: `${getActiveColor(itemKey)}-3`,
    weight: sub.weight || '400',
  } as TextProps;
};
const sugObjectNameProps = (sub: SubObject, itemKey: string | number) => {
  return {
    value: sub.name,
    size: sub.size || 'sm1.1',
    color: `${getActiveColor(itemKey)}-4`,
    weight: sub.weight || '400',
  } as TextProps;
};

const subObjectItemValueProps = (sub: Sub, itemKey: string | number) => {
  const sharedProps = {
    suffix: sub.suffix || '',
    value: data[sub.key],
    size: sub.size || 'sm1.1',
    color: `${getActiveColor(itemKey)}-3`,
    weight: sub.weight || '400',
    variant: sub.variant,
  } as NumberProps;
  if (isRiseFall(sharedProps)) {
    return {
      ...sharedProps,
      colourful: getColourful(sub.colourful, itemKey),
    };
  } else {
    return sharedProps;
  }
};

const subNumberProps = computed(() => (sub: Sub, itemKey: string | number) => {
  const sharedProps = {
    colourful: getColourful(sub.colourful, itemKey),
    color: `${getActiveColor(itemKey)}-1`,
    size: sub.size || 'lg',
    sign: sub.sign || false,
    weight: sub.weight || '600',
    suffix: sub.suffix,
    // ...(sub.suffix ? { suffix: sub.suffix } : {}),
  };
  if (sub.variant === 'rf') {
    return {
      ...sharedProps,
      variant: 'rf',
      value: data[sub.key],
    } as RiseFallProps;
  } else {
    return {
      ...sharedProps,
      value: data[sub.key],
    } as NumberProps;
  }
});
</script>

<template>
  <div class="v-tab-block_normal">
    <div
      v-for="item in computedColumns"
      :key="item.key"
      class="v-tab-block"
      :class="classes(item.key)"
      @click="handleClick(item)"
    >
      <div class="v-tab-block_normal-main">
        <Space size="mini">
          <Text v-bind="mainNameProps(item)"></Text>
          <Number v-bind="mainNumberProps(item)" />
        </Space>

        <div class="v-tab-block_normal-main_sub" v-if="mainSubNameProps(item)">
          <Text v-bind="mainSubNameProps(item)" />
          <Number
            :data-active="getActive(item.key)"
            v-if="item.main.number"
            v-bind="
              mainSubNumberProps(item.main.number, item.key) as NumberProps
            "
          />
        </div>
        <!--    sub array   -->
        <div
          class="v-tab-block_normal-sub"
          v-if="Array.isArray(item.sub) && item.sub.length"
        >
          <div class="v-tab-block_normal-sub-item" v-for="sub in item.sub">
            <Space size="mini">
              <Text v-bind="subNameProps(sub, item.key)"></Text>
              <Number
                :data-active="getActive(item.key)"
                v-bind="subNumberProps(sub, item.key) as NumberProps"
              />
            </Space>
          </div>
        </div>

        <!--    sub array    -->
        <div class="v-tab-block_normal-sub_object" v-if="isObject(item.sub)">
          <Space size="sm" variant="row">
            <Text
              v-bind="sugObjectNameProps(item.sub as SubObject, item.key)"
            ></Text>
            <template v-for="subItem in (item.sub as SubObject).columns">
              <Number v-bind="subObjectItemValueProps(subItem, item.key)" />
            </template>
          </Space>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./style.css"></style>
