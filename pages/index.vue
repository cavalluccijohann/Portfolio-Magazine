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
  <div class="flex flex-col w-screen h-screen justify-between">
    <div class="flex flex-center justify-center size-full overflow-hidden">
      <Magazine />
    </div>
  </div>
</template>

<style scoped>

</style>