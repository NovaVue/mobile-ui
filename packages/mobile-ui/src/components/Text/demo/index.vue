<script setup lang="ts">
import { VText, VWrapper } from '@novavue/mobile-ui';
</script>
<template>
  <div class="d-container">
    <VText value="文本font-size" />
    <VWrapper>
      <VText value="文本sm" size="sm" />
    </VWrapper>

    <VWrapper>
      <VText value="文本base" />
    </VWrapper>

    <VWrapper>
      <VText value="文本lg" size="lg" />
    </VWrapper>

    <VWrapper>
      <VText value="文本xl" size="xl" />
    </VWrapper>
    <VWrapper>
      <VText value="文本2xl" size="2xl" />
    </VWrapper>
    <VWrapper>
      <VText value="文本3xl" size="3xl" />
    </VWrapper>
    <VWrapper>
      <VText value="文本4xl" size="4xl" />
    </VWrapper>

    <VText value="文本font-weight" />

    <VWrapper>
      <VText value="文本100" weight="100" />
    </VWrapper>

    <VWrapper>
      <VText value="文本200" weight="200" />
    </VWrapper>

    <VWrapper>
      <VText value="文本300" weight="300" />
    </VWrapper>

    <VWrapper>
      <VText value="文本400" weight="400" />
    </VWrapper>

    <VWrapper>
      <VText value="文本500" weight="500" />
    </VWrapper>

    <VWrapper>
      <VText value="文本600" weight="600" />
    </VWrapper>

    <VWrapper>
      <VText value="文本700" weight="700" />
    </VWrapper>

    <VWrapper>
      <VText value="文本800" weight="800" />
    </VWrapper>

    <VWrapper>
      <VText value="文本900" weight="900" />
    </VWrapper>

    <VText value="文本color" />

    <VWrapper>
      <VText value="文本dark-1" color="dark-1" />
    </VWrapper>

    <VWrapper>
      <VText value="文本dark-2" color="dark-2" />
    </VWrapper>

    <VWrapper>
      <VText value="文本dark-3" color="dark-3" />
    </VWrapper>



    <VWrapper>
      <VText value="文本medium" color="medium" />
    </VWrapper>

    <VWrapper style="background: black">
      <VText value="文本light-1" color="light-1" />
    </VWrapper>

    <VWrapper style="background: black">
      <VText value="文本light-2" color="light-2" />
    </VWrapper>

    <VWrapper style="background: black">
      <VText value="文本light-3" color="light-3" />
    </VWrapper>

    <VWrapper>
      <VText value="文本red" color="red" />
    </VWrapper>

    <VText value="文本插槽" />
    <VWrapper>
      <VText>
        <span>默认插槽</span>
      </VText>
    </VWrapper>

    <VWrapper>
      <VText>
        <span style="margin: 0 12px">标题</span>
        <template #prefix>
          <span>左侧插槽</span>
        </template>
        <template #suffix>
          <span>右侧侧插槽</span>
        </template>
      </VText>
    </VWrapper>
  </div>
</template>
<style scoped></style>
