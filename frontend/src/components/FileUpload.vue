<template>
    <div class="file has-name is-boxed">
        <label class="file-label">
        <input class="file-input" type="file" name="resume" />
        <span class="file-cta">
            <span class="file-icon">
            <i class="fas fa-upload"></i>
            </span>
            <span class="file-label" > {{$t('message.component.fileUpload.hint')}} </span>
        </span>
        <span class="icon">
  <i class="fas fa-home"></i>
</span>
        </label>
  </div>
  <div class="file">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
  </label>
</div>
</template>