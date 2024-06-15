<script setup lang="ts">
import { RouterView } from 'vue-router'
import  Header from '@/components/TheHeader.vue'
import Footer from '@/components/TheFooter.vue'
</script>

<template>
  <div class='hero is-fullheight'>
    <Header />
    <RouterView/>
    <Footer/>
  </div>
</template>

<style scoped>
  html, body {min-height: 100vh;}
  .wrapper {
    /* min-height: 100vh; */
    /* display: flex; */
    /* grid-template-rows: auto 1fr auto; */
  }
</style>
