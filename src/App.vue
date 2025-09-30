<script setup>
import {RouterView } from 'vue-router'
</script>

<template>
  <div class="homeApp">
    <RouterView />
  </div>

</template>

<style scoped lang="less">
html, body{
  margin: 0;
  padding: 0;
}
.homeApp{
  width: 100%;
  overflow-y: auto;
}
</style>
