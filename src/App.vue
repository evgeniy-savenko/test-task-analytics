<script lang="ts" setup>
import View from './pages/analytics/View.vue';
//Мог бы быть и роутер-вью. В app.vue в теории должны быть только основные слои, но какие-то знания архитектуры в таком тест-таске показывать смысла не много.
</script>

<template>
  <div class="layout">
    <View />
  </div>
</template>

<style scoped lang="scss">
.layout {
  background-color: white; 
  width: 100vh;
  height: 100vh;
  border-radius: 2%;
}
</style>