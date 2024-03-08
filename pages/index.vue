<script lang="ts" setup>
import Footer from "~/components/Footer.vue";

definePageMeta({
  title: "Home",
  name: "Home",
  path: "/",
  description: "Home page",
  keywords: "Home",
});
</script>

<template>
  <div class="flex flex-col h-screen justify-between">
    <div class="flex flex-center justify-center h-screen w-screen items-center">
      <img v-if="$colorMode.value === 'light'"
          src="/assets/logo/starter-image.svg"
           alt="logo"
           class="w-5/12 h-5/12"
      />
      <img v-else
           src="/assets/logo/starter-image-white.svg"
           alt="logo"
           class="w-5/12 h-5/12"
      />
    </div>
    <Footer />
  </div>
</template>

<style scoped>

</style>