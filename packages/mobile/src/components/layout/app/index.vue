<template>
  <div class="app">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup></script>

<style scoped>
.bg {
  width: 400px;
  height: 400px;
  background-image: url('./image.png');
}
.app {
  width: 100%;
  height: 400px;
  -webkit-backdrop-filter: blur(15px);
  /* Google Chrome */
  backdrop-filter: blur(15px);
  /* 设置背景半透明黑色 */
  /* background: rgba(0, 0, 0, 0.1); */
  background: rgb(232,157,251)
}

/* 若浏览器支持 backdrop-filter，则透明度为 50%，并启用毛玻璃 */
/* @supports (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px)) {
    .navbar {
        background: rgba(0, 0, 0, 0.5);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        color: #eee;
    }
}

/* 若浏览器器不支持，则使用 MaterialDesign 的风格 */
@supports not (
  (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
) {
  /* .navbar {
        background: #fff;
        color: #333;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, .18), 0px 6px 10px rgba(0, 0, 0, .22);
    } */
}
</style>
