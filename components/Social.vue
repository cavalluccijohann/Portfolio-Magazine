<script setup lang="ts">
const socials = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/johann-cavallucci/",
    logo: "SvgoLinkedin",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/johann.cvl/",
    logo: "SvgoInstagram",
  },
  {
    name: "Github",
    link: "https://github.com/cavalluccijohann",
    logo: "SvgoGithub",
  },
];
</script>

<template>
  <div class="flex gap-6 sm:gap-10 my-10 z-10">
    <NuxtLink
      v-for="social in socials"
      :key="social.name"
      :to="social.link"
      target="_blank"
      class="flex items-center justify-center cursor-pointer"
      :aria-label="'Go to ' + social.name + ' profile'"
    >
      <span class="sr-only">Go to {{ social.name }} profile</span>
      <component
        :is="social.logo"
        class="social-item size-6 transition-all duration-300 text-color-text hover:text-color-primary cursor-pointe"
        :fontControlled="false"
        :alt="social.name + ' logo'"
        :aria-label="social.name + ' logo'"
      />
    </NuxtLink>
  </div>
</template>
