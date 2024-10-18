<script lang="ts" setup>
import {Toaster} from "vue-sonner";

definePageMeta({
  title: "Home",
  name: "Home",
  path: "/",
  description: "Home page",
  keywords: "Home",
});
</script>

<template>
  <Toaster position="top-left" />
  <div class="flex flex-col w-screen justify-between">
    <div class="flex flex-center justify-center size-full lg:overflow-hidden">
      <Magazine />
    </div>
  </div>
</template>