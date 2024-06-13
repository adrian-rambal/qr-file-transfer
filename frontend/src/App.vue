<script setup lang="ts">
import { RouterView } from 'vue-router'
import  Header from '@/components/TheHeader.vue'
import Footer from '@/components/TheFooter.vue'
</script>

<template>
  <div class="wrapper">
    <Header />
    <RouterView />
    <Footer/>
  </div>
</template>

<style scoped>
  .wrapper {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
</style>
