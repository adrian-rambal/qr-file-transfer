<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>{{$t('message.appName')}}</strong> {{$t('message.footer.authoring')}}.
        {{$t('message.footer.sourceCodeLicensed')}}
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        {{$t('message.footer.websiteLicensed')}}
        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY NC SA 4.0</a
        >.
      </p>
    </div>
  </footer>
</template>

<style scoped>
</style>
