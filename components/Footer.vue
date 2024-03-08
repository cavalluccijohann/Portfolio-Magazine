<script setup lang="ts">

</script>

<template>
  <div class="w-full">
    <div class="w-full h-[0.5px] bg-color-text flex items-center justify-center">
      <div class="w-8 h-8 bg-color-background rounded-full flex items-center justify-center">
        <img src="/assets/logo/nuxt.png" alt="logo" class="w-7/12 h-7/12" />
      </div>
    </div>
    <div class="p-5">
      <div class="flex justify-between items-center">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          ©2024 Nuxt Starter - MIT License
        </p>
        <div class="w-auto h-4 flex justify-between items-center">
          <a class="w-4 h-4 mr-3" href="https://github.com/cavalluccijohann" target="_blanck">
            <img src="/assets/logo/github.svg" alt="logo" class="w-full h-full" />
          </a>
          <a class="w-5 h-5 mr-3" href="https://www.instagram.com/johann.cvl" target="_blanck">
            <img src="/assets/logo/instagram.svg" alt="logo" class="w-full h-full" />
          </a>
          <a class="w-5 h-5" href="https://bento.me/johanncvl" target="_blanck">
            <img src="/assets/logo/info.svg" alt="logo" class="w-full h-full" />
          </a>
          <div class="w-[0.5px] h-4 bg-color-primary mx-3"></div>
          <ThemeSelector />
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>