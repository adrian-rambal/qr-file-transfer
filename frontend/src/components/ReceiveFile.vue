<script setup lang="ts">
import router from '@/router';
</script>

<template>
    <div class="card" >
      <div class="card-content">
        <p class="subtitle has-text-centered">Receive to this device</p>
        <div class="content is-centered">
            <button @click="router.push({name:'transfer'})" class="button is-link is-outlined is-fullwidth">Generate QR</button>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.card {
  
  background-color: rgb(214, 209, 160);
}
</style>