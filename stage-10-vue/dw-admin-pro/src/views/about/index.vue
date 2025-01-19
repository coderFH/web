<template>
  <div class="wrap-about">
      <tag :text="text" :theme="theme"></tag>
      <tag :text="text" :theme="theme"></tag>
      <tag :text="text" :theme="theme"></tag>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
// import tag from './tag.vue';
const text = ref('大伟');
const theme = ref('black');
</script>
<style lang="less" scoped>
.wrap-about {
  // color: @color;
  background: var(--dawei-color-dark-black);
}
</style>
