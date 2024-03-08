<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
import { capitalize } from "~/composables/useString";

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});

</script>

<template>
  <div>
    <div class="flex items-center gap-2 w-4 h-4 cursor-pointer">
      <component
          :is="$colorMode.value === 'light' ? SunIcon : MoonIcon"
          class="text-color-text/50"
          @click="$colorMode.value === 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'light'"
      />
      <span class="text-m font-bold" v-if="isText">{{ capitalize($colorMode.preference) }}</span>
    </div>
  </div>
</template>
