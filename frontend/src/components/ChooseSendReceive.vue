<script setup lang="ts">
import FileUpload from "./FileUpload.vue";
import ReceiveFile from "./ReceiveFile.vue";

</script>

<template>
  <section class="section is-large">
  <div class="columns">
    <div class="column is-6">
      <!-- <div class="container"> -->
        <FileUpload></FileUpload>
      <!-- </div> -->
    </div>
    <!-- <div class="column is-narrow" style="width: 6px;">

    </div> -->
    <div class="column is-6">
      <ReceiveFile></ReceiveFile>
    </div>
  </div>
  </section>
</template>


<!-- <style lang="scss">
    @forward "~bulma/sass/elements/button";
</style> -->
