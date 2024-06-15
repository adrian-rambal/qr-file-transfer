<template>
  <div class="card" >
    <div class="card-content">
      <p class="subtitle has-text-centered">Send a file to another device</p>
      <div class="content">
        <div class="file has-name is-boxed is-centered">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label"> {{ $t('message.component.fileUpload.hint') }} </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>