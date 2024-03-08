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
      <Magazine />
    </div>
    <Footer />
  </div>
</template>

<style scoped>

</style>