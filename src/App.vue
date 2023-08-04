<template>
  <div class="app">
    <RouterView/>
  </div>
</template>
<script setup>
import {RouterView} from 'vue-router'

</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.app {
  width: 100%;
  height: 100%;
  font-size: 100px;

}

.content {
  width: 100%;
  max-width: 1920px;
  height: 100%;
  margin: 0 auto;
  font-size: 100px;
  position: relative;
}

</style>
