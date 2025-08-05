<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import NavBar from './components/NavBar/index.vue';
const router = useRouter();
const title = ref('组件总览');
// iframe中的代码
onMounted(() => {
  window.addEventListener('message', function (event) {
    const route = event.data.route || ''
    if (!route) return
    router.push(`/${route}`);
    title.value = event.data.title || '组件总览';
  });
});
</script>

<template>
  <div class="app theme">
    <NavBar :title="title" />
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  position: relative;
  box-sizing: border-box;
  /* z-index: 1; */
  padding: 56px var(--v-spacing-base) var(--v-spacing-base) var(--v-spacing-base);
  background: rgb(231,233,235);
}
</style>
