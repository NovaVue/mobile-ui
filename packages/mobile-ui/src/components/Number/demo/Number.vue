<script setup lang="ts">
import { ref } from 'vue';
import { VWrapper, VNumber, VText } from '@novavue/mobile-ui';
const value = ref('10000.99');
</script>

<template>
  <div class="d-container">
    <VText value="不同size, weight:500" />
    <VWrapper>
      <VNumber :value="value" suffix="万元-mini" size="mini" weight="500"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber :value="value" suffix="万元-sm" size="sm" weight="500"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber :value="value" suffix="万元-base" size="base" weight="500"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber :value="value" suffix="万元-lg" size="lg" weight="500"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber :value="value" suffix="万元-xl" size="xl" weight="500"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber :value="value" suffix="万元-2xl" size="2xl" weight="500"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber :value="value" suffix="万元-3xl" size="3xl" weight="500"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber :value="value" suffix="万元-4xl" size="4xl" weight="500"></VNumber>
    </VWrapper>

    <VText value="不同weight" />
    <VWrapper>
      <VNumber :value="value" suffix="万元-100" weight="100"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber :value="value" suffix="万元-200" weight="200"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber :value="value" suffix="万元-300" weight="300"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber :value="value" suffix="万元-400" weight="400"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber :value="value" suffix="万元-500" weight="500"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber :value="value" suffix="万元-600" weight="600"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber :value="value" suffix="万元-600" weight="600"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber :value="value" suffix="万元-600" weight="600"></VNumber>
    </VWrapper>

    <VWrapper>
      <VNumber :value="value" suffix="万元-700" weight="700"></VNumber>
    </VWrapper>

    <VWrapper>
      <VNumber :value="value" suffix="万元-800" weight="800"></VNumber>
    </VWrapper>

    <VWrapper>
      <VNumber :value="value" suffix="万元-900" weight="900"></VNumber>
    </VWrapper>
  </div>
</template>

<style scoped></style>
