<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
});
</script>
<template>
  <div class="nav-bar">{{ title }}</div>
</template>
<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  backdrop-filter: blur(15px);
  background: rgba(255,255,255,0.6);
}
</style>
