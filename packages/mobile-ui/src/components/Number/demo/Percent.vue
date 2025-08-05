<script setup lang="ts">
import { ref } from 'vue';
import { VNumber, VText, VWrapper } from '@novavue/mobile-ui';
const upValue = ref(100.99);
const downValue = ref(-100.01);
</script>

<template>
  <div class="d-container">
    <VText>涨跌 variant = 'rf'</VText>
    <VWrapper>
      <VNumber variant="rf" :value="0" ></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber variant="rf" :value="0" defaultValue="--"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber variant="rf" :value="upValue" :sign="true"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber variant="rf" :value="downValue"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber variant="rf" :colourful="true" :value="100" size="mini" weight="bold"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber variant="rf" :value="100" size="sm" weight="bold"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber variant="rf" :value="100" size="base" weight="bold"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber variant="rf" :value="100" size="lg" weight="bold"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber variant="rf" :value="-100" size="xl" weight="bold"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber variant="rf" :value="-100" size="2xl" weight="bold"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber variant="rf" :value="-100" size="3xl" weight="bold"></VNumber>
    </VWrapper>
    <VWrapper>
      <VNumber variant="rf" :value="-100" size="4xl" weight="bold"></VNumber>
    </VWrapper>

    <VWrapper>
      <VNumber variant="rf" :value="0" defaultValue="-"></VNumber>
    </VWrapper>
  </div>
</template>

<style scoped></style>
