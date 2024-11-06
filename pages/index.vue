<script lang="ts" setup>
import {Toaster} from "vue-sonner";

  useHead({
  title: "Modern Portfolio Magazine Template",
  titleTemplate: "",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "keywords", content: "portfolio template, magazine portfolio, creative portfolio template, Nuxt portfolio, Tailwind CSS portfolio, TypeScript portfolio, Resend email integration, personal branding template, web developer portfolio" },
    { name: "description", content: "Discover a unique, magazine-inspired portfolio template for designers and professionals. Built with Nuxt, Tailwind CSS, and TypeScript, it’s fully customizable and optimized for impactful personal branding." },
    { name: "author", content: "Johann Cavallucci" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});

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
