<script lang="ts" setup>

definePageMeta({
  title: "Home",
  name: "Home",
  path: "/",
  description: "Home page",
  keywords: "Home",
});
</script>

<template>
  <div class="flex flex-col w-screen h-full lg:h-screen justify-between">
    <div class="flex flex-center justify-center size-full lg:overflow-hidden">
      <Magazine />
    </div>
  </div>
</template>

<style scoped>

</style>