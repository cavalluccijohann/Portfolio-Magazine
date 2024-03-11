<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { data } = props;
async function goToContact() {
  const numberPages = data.length;
  // simulate a click on the element with the class "page" and the key 1
  for (let i = 1; i < numberPages;) {
    console.log('i', i);
    document.querySelector('.page:nth-child(' + i + ')').click();
    await new Promise(resolve => setTimeout(resolve, 500));
    i += 2;
    if (i > 20) {
      console.log('break');
      break;
    }
  }
}

</script>

<template>
  <div>
    <h1 class="anton font-medium text-4xl text-color-text">
      Hello, bienvenue sur mon <span class="text-color-primary">Portfolio</span>
    </h1>
    <p class="antonio font-medium text-sm mt-10 text-color-text">
      Ullamco est sit consectetur deserunt veniam irure est laboris. Minim proident excepteur nulla. Nostrud et consectetur ex ipsum exercitation adipisicing sint minim. Fugiat est sit reprehenderit cillum cillum ad aute proident in ea mollit.
    </p>
    <Social />
    <NuxtLink
        @click="goToContact()"
        class="hidden lg:block cursor-pointer flex items-center hover:text-color-primary/50"
    >
      <span class="sr-only">Go to the contact page</span>
      <Icon name="i-lucide-external-link" class="size-4 text-color-primary/90 text-center mr-2" />
      <span class="antonio font-medium text-sm text-color-primary " >Me contacter</span>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>