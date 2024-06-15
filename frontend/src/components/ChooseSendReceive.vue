<script setup lang="ts">
import FileUpload from "./FileUpload.vue";
import ReceiveFile from "./ReceiveFile.vue";

</script>

<template>
  <section class="section is-large">
  <div class="columns">
    <div class="column is-6">
        <FileUpload></FileUpload>
    </div>
    <div class="column is-6">
      <ReceiveFile></ReceiveFile>
    </div>
  </div>
  </section>
</template>