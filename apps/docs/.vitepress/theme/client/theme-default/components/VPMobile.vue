<script lang="ts" setup>
import { computed, ref, useTemplateRef, watch } from 'vue';
import { useData } from '../composables/data';

const {
  // theme,
  page,
} = useData();
const iframe = useTemplateRef('iframe');

const route = computed(() => {
  return page.value.relativePath
    .replace('mobile/components', '')
    .replace('/index.md', '');
});

const url = ref('http://localhost:9999');

function setWatch() {
  watch(route, () => {
    postMessage();
  });
}
function onLoad() {
  postMessage();
  setWatch();
}
function postMessage() {
  if (iframe.value) {
    console.log('route', route.value);
    iframe.value?.contentWindow?.postMessage(
      {
        title: page.value.title,
        route: route.value,
      },
      url.value,
    );
  }
}
</script>
<template>
  <div class="VPMobile">
    <iframe
      @load="onLoad"
      ref="iframe"
      on
      class="VPMobile-iframe"
      style="width: 100%; height: 100%"
      :src="url"
      frameborder="0"
    ></iframe>
  </div>
</template>

<style scoped>
.VPMobile {
  width: 100%;
  height: var(--vp-mobile-height);
  background-color: var(--vp-sidebar-bg-color);
  border-radius: 12px;
  border: 2px solid var(--vp-sidebar-bg-color);
}
.VPMobile-iframe {
  width: 100%;
  border-radius: 12px;
  height: var(--vp-mobile-height);
  background-color: var(--vp-sidebar-bg-color);
}
</style>
