<script setup lang="ts">
import { ref } from 'vue';
import { VText, VWrapper, VSpace } from '@novavue/mobile-ui';

import Normal from './Normal.vue';
import Group from './Group.vue';

const active = ref('normal');
function handleClick(key: string) {
  active.value = key;
}
</script>

<template>
  <VSpace>
    <VWrapper>
      <VSpace variant="row">
        <VText class="v-cursor-pointer" @click="handleClick('normal')">Normal</VText>
        <VText class="v-cursor-pointer" @click="handleClick('group')">Group</VText>
      </VSpace>
    </VWrapper>
    <Normal v-if="active === 'normal'"></Normal>
    <Group v-if="active === 'group'"></Group>
  </VSpace>
</template>

<style scoped></style>
