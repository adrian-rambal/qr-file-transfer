<template>
  <div class="card" >
    <div class="card-content">
      <p class="subtitle has-text-centered">Send from this device</p>
      <div class="content">
        <div class="file is-fullwidth">
          <label class="file-label">
            <input @change="uploadFile" ref="fileInput" class="file-input" type="file"  />
            <span class="file-cta" style="width: 100%;">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label"> Choose a file… </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from "vue";
import router from "../router"

const file = ref(null);
const uploadFile = (event) => {
  file.value = event.target.files[0];
  console.log("File uploaded 1 ", file);

  
  router.push(
    {name:"transfer", 
    query:{fileName:file.value.name}}
  );
  //router.push("/transfer");
};
</script>



<style scoped>
  .card {
    background-color: rgb(192, 175, 211);
  }
</style>