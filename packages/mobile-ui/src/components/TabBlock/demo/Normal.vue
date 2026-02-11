<script setup lang="ts">
import { VTabBlock } from '@novavue/mobile-ui';
import { reactive } from 'vue';
const data: any = reactive({
  月度收入: 987.01,
  月度收入百分比: 10,
  年度收入: 9999.01,
  年度收入2: -234.01,
  年度收入百分比: 10.11,
  月度收入达成: 11.11,
  月度毛利: 110.11,
  年度利润率入: -111.22,
});
function handleChange(item) {
  console.log(item);
}

const normalProps1 = {
  variant: 'normal',
  columns: [
    {
      key: 1,
      main: {
        name: '月度收入',
        key: '月度收入',
        suffix: '万元',
        number: {
          // variant: 'rf',
          name: '环比',
          key: '年度收入百分比',
          suffix: '万',
        },
      },
    },
    {
      key: 2,
      main: {
        name: '年度收入',
        key: '年度收入',
        suffix: '万',
      },
    },
  ],
};
const normalProps2 = {
  variant: 'normal',
  columns: [
    {
      key: 1,
      main: {
        name: '月度收入',
        key: '月度收入',
        suffix: '万元',
        variant: 'rf',
        colourful: true,
        sign: true,
        number: {
          variant: 'rf',
          name: '环比',
          key: '年度收入百分比',
        },
      },
      sub: {
        name: '环比',
        columns: [
          {
            key: '月度收入达成',
            variant: 'rf',
            colourful: true,
          },
          {
            key: '月度毛利',
            variant: 'number',
            suffix: '万',
          },
        ],
      },
    },
    {
      key: 2,
      main: {
        name: '年度收入',
        key: '年度收入2',
        suffix: '万',
        colourful: true,
        variant: 'rf',
        sign: true,
      },
      sub: {
        name: '环比',
        columns: [
          {
            key: '月度收入达成',
            variant: 'rf',
            colourful: true,
          },
          {
            key: '月度毛利',
            variant: 'number',
            suffix: '万',
          },
        ],
      },
    },
  ],
};

const normalProps3 = {
  variant: 'normal',
  columns: [
    {
      key: 1,
      main: {
        name: '月度收入',
        key: '月度收入',
        suffix: '万元',
        number: {
          variant: 'rf',
          name: '环比',
          key: '年度收入百分比',
        },
      },
      sub: [
        {
          name: '收入达成',
          key: '月度收入达成',
          variant: 'rf',
          colourful: true,
          sign: true,
        },
        {
          name: '毛利',
          key: '月度毛利',
          variant: 'number',
          suffix: '万',
        },
      ],
    },
    {
      key: 2,
      main: {
        name: '年度收入',
        key: '年度收入',
        suffix: '万',
        number: {
          variant: 'rf',
          name: '环比',
          key: '年度收入百分比',
        },
      },
      sub: [
        {
          name: '收入达成',
          key: '月度收入达成',
          variant: 'rf',
        },
        {
          name: '毛利',
          key: '月度毛利',
          variant: 'number',
          suffix: '万',
        },
      ],
    },
  ],
};

const normalProps4 = {
  variant: 'normal',
  columns: [
    {
      key: 1,
      main: {
        variant: 'rf',
        name: '月度利润率',
        key: '月度收入',
        number: {
          variant: 'rf',
          name: '环比',
          key: '年度收入百分比',
        },
      },
      sub: [
        {
          name: '收入达成',
          key: '月度收入达成',
          variant: 'rf',
        },
        {
          name: '毛利',
          key: '月度毛利',
          variant: 'number',
          suffix: '万',
        },
      ],
    },
    {
      key: 2,
      main: {
        name: '年度利润率入',
        key: '年度利润率入',
        suffix: '万',
        variant: 'rf',
        number: {
          variant: 'rf',
          name: '环比',
          key: '年度收入百分比',
        },
      },
      sub: [
        {
          name: '收入达成',
          key: '月度收入达成',
          variant: 'rf',
        },
        {
          name: '毛利',
          key: '月度毛利',
          variant: 'number',
          suffix: '万',
        },
      ],
    },
  ],
};

const normalProps5 = {
  variant: 'normal',
  columns: [
    {
      key: 1,
      main: {
        variant: 'rf',
        name: '月度利润率',
        key: '月度收入',
        colourful: true,
        number: {
          variant: 'rf',
          name: '环比',
          key: '年度收入百分比',
          colourful: true,
        },
      },
      sub: [
        {
          name: '收入达成',
          key: '月度收入达成',
          variant: 'rf',
          colourful: true,
        },
        {
          name: '毛利',
          key: '月度毛利',
          variant: 'number',
          suffix: '万',
          colourful: true,
        },
      ],
    },
    {
      key: 2,
      main: {
        name: '年度利润率',
        key: '年度利润率入',
        suffix: '万',
        variant: 'rf',
        colourful: true,
        number: {
          variant: 'rf',
          name: '环比',
          key: '年度收入百分比',
          colourful: true,
        },
      },
      sub: [
        {
          name: '收入达成',
          key: '月度收入达成',
          variant: 'rf',
          colourful: true,
        },
        {
          name: '毛利',
          key: '月度毛利',
          variant: 'number',
          suffix: '万',
          colourful: true,
        },
      ],
    },
  ],
};
const normalProps6 = {
  variant: 'normal',
  columns: [
    {
      key: 1,
      main: {
        name: '月度利润率',
        key: '月度收入',
        number: {
          variant: 'rf',
          name: '环比',
          key: '年度收入百分比',
        },
      },
      sub: [
        {
          name: '收入达成',
          key: '月度收入达成',
          variant: 'rf',
        },
        {
          name: '毛利',
          key: '月度毛利',
          variant: 'number',
        },
      ],
    },
    {
      key: 2,
      main: {
        name: '年度利润率',
        key: '年度利润率入',
        suffix: '万',
        number: {
          variant: 'rf',
          name: '环比',
          key: '年度收入百分比',
        },
      },
      sub: [
        {
          name: '收入达成',
          key: '月度收入达成',
          variant: 'rf',
        },
        {
          name: '毛利',
          key: '月度毛利',
          variant: 'number',
          suffix: '万',
        },
      ],
    },
  ],
};
</script>

<template>
  <VTabBlock
    @change="handleChange"
    :active="1"
    :data="data"
    v-bind="normalProps1"
  ></VTabBlock>

  <VTabBlock
    @change="handleChange"
    :active="1"
    :data="data"
    v-bind="normalProps2"
  ></VTabBlock>

  <VTabBlock
    @change="handleChange"
    :active="2"
    :data="data"
    v-bind="normalProps3"
  ></VTabBlock>

  <VTabBlock
    theme="green"
    @change="handleChange"
    :active="1"
    :data="data"
    v-bind="normalProps3"
  ></VTabBlock>

  <VTabBlock
    theme="purple"
    @change="handleChange"
    :active="2"
    :data="data"
    v-bind="normalProps3"
  ></VTabBlock>

  <VTabBlock
    theme="pink"
    @change="handleChange"
    :active="1"
    :data="data"
    v-bind="normalProps3"
  ></VTabBlock>

  <VTabBlock
    theme="red"
    @change="handleChange"
    :active="1"
    :data="data"
    v-bind="normalProps3"
  ></VTabBlock>

  <VTabBlock :data="data" :colourful="true" v-bind="normalProps4"></VTabBlock>
  <VTabBlock :data="data" :active="2" v-bind="normalProps5"></VTabBlock>
  <VTabBlock :data="data" :active="2" v-bind="normalProps6"></VTabBlock>
</template>
∑

<style></style>
