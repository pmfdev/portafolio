<!-- App.vue -->

<template>
  <LayoutMain>
    <router-view /> <!-- Componentes se renderizan aquí -->
  </LayoutMain>
</template>

<script>
import LayoutMain from './layouts/LayoutMain.vue';

export default {
  components: {
    LayoutMain
  }
};
</script>

<style>
  @import './styles/main.css';
</style>