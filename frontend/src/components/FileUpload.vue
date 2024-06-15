<template>
  <div class="card" >
    <div class="card-content">
      <p class="subtitle has-text-centered">Send from this device</p>
      <div class="content">
        <div class="file is-fullwidth">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
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

<style scoped>
  .card {
    background-color: rgb(192, 175, 211);
  }
</style>