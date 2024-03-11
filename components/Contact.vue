<script setup lang="ts">
import { toast, Toaster } from "vue-sonner";
import { defineProps } from 'vue';
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { data } = props;
async function goToHome() {
  const numberPages = data.length;
  // simulate a click on the element with the class "page" and the key 1
  for (let i = numberPages; i > 0;) {
    document.querySelector('.page:nth-child(' + i + ')').click();
    await new Promise(resolve => setTimeout(resolve, 500));
    i -= 2;
    if (i > 20) {
      console.log('break');
      break;
    }
  }
}

const form = ref({
  name: "",
  phone: "",
  email: "",
  message: "",
});
const loading = ref(false);
async function sendForm() {
  loading.value = true;
  try {
    await useFetch("/api/sendEmail", {
      method: "POST",
      body: form.value,
    });
    form.value = {
      name: "",
      phone: "",
      email: "",
      message: "",
    };
  } catch (error) {
    console.error("Error sending form:", error);
    toast.error("Error sending form", {
      style: {
        background: "var(--toast-color)",
        opacity: 0.9,
        borderColor: "var(--toast-color)",
        color: "var(--text-color)",
      },
    });
  } finally {
    toast.success("Message sent successfully", {
      style: {
        background: "var(--toast-color)",
        opacity: 0.9,
        borderColor: "var(--toast-color)",
        color: "var(--text-color)",
      },
    });
    loading.value = false;
  }
}
</script>

<template>
  <div class="w-full">
    <Toaster position="top-left" />
    <h1 class="anton p-5 font-medium text-4xl text-color-text text-end">Contact <span class="text-color-primary">Me</span></h1>
    <h3 class="antonio text-sm text-color-text font-medium text-end">If you want to contact me, please fill out the form below</h3>
    <form class="w-full flex flex-col justify-center items-end mt-5" @submit.prevent="sendForm()">
      <div class="relative w-full flex flex-col justify-center items-end">
        <input
            type="text"
            placeholder="full name"
            v-model="form.name"
            required
            class="relative my-1 w-3/4 lg:w-2/2 p-2 pl-10 text-color-text/60 rounded-lg border-[1px] border-gray-300 focus:outline-none focus:ring-1 focus:ring-text-color-primary focus:border-transparent"
        />
        <span class="w-3/4 lg:w-2/2 absolute inset-y-0 flex items-center pointer-events-none px-2.5">
          <UIcon name="i-lucide-circle-user-round" class="w-5 h-5 text-color-text/60" />
        </span>
      </div>

      <div class="relative w-full flex flex-col justify-center items-end">
        <input
            type="email"
            placeholder="your email"
            v-model="form.email"
            required
            class="relative my-1 w-3/4 lg:w-2/2 p-2 pl-10 text-color-text/60 rounded-lg border-[1px] border-gray-300 focus:outline-none focus:ring-1 focus:ring-text-color-primary focus:border-transparent"
        />
        <span class="w-3/4 lg:w-2/2 absolute inset-y-0 start-50 flex items-center pointer-events-none px-2.5">
          <UIcon name="i-lucide-inbox" class="w-5 h-5 text-color-text/60" />
        </span>
      </div>

      <div class="relative w-full flex flex-col justify-center items-end">
        <input
            type="tel"
            placeholder="your phone number"
            v-model="form.phone"
            class="relative my-1 w-3/4 lg:w-2/2 p-2 pl-10 text-color-text/60 rounded-lg border-[1px] border-gray-300 focus:outline-none focus:ring-1 focus:ring-text-color-primary focus:border-transparent"
        />
        <span class="w-3/4 lg:w-2/2 absolute inset-y-0 start-50 flex items-center pointer-events-none px-2.5">
          <UIcon name="i-lucide-phone" class="w-5 h-5 text-color-text/60" />
        </span>
      </div>

      <div class="relative w-full flex flex-col justify-center items-end">
        <textarea
            type="text"
            placeholder="your message"
            v-model="form.message"
            required
            class="relative my-1 w-3/4 lg:w-2/2 p-2 h-42 min-h-50 text-color-text/60 rounded-lg border-[1px] border-gray-300 focus:outline-none focus:ring-1 focus:ring-text-color-primary focus:border-transparent"
        />
      </div>

      <div class="relative w-full flex flex-col justify-center items-end">
        <button
            type="submit"
            :class="{ 'cursor-not-allowed': loading }"
            @click="!loading"
            :disabled="loading"
            class="font-bold w-3/4 rounded-lg lg:w-2/2 p-2 my-1 text-base font-medium text-center inline-flex items-center justify-center text-color-background shadow-sm bg-color-text/90 hover:bg-color-text/60 relative from-secondary-color via-primary-color to-primary-color transition-all duration-300"
        >
          <UIcon v-if="!loading" name="i-lucide-send" class="w-5 h-5 text-color-background  mr-2" />
          <UIcon v-else name="i-lucide-rotate-ccw" class="w-5 h-5 text-color-background  mr-2 animate-spin" />

          {{ loading ? "" : "Send" }}
        </button>
        <NuxtLink
            @click="goToHome()"
            class="cursor-pointer flex items-center hover:text-color-primary/50 mt-10"
        >
          <span class="sr-only">Go to the Home page</span>
          <span class="antonio font-medium text-sm text-color-primary " >Retour Acceuil</span>
          <Icon name="i-lucide-external-link" class="size-4 text-color-primary/90 text-center ml-2" />
        </NuxtLink>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>