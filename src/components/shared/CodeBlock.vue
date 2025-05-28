<script setup lang="ts">
import { inject } from "vue";

const app: any = inject("app");
defineProps<{
  description: string;
  text: string;
  link: string;
  section: string;
}>();
</script>

<template>
  <div class="border rounded bg-gray-700 min-w-[500px] px-1 py-1 my-2">
    <!-- Description -->
    <p class="text-green-500">
      <span class="text-gray-500 mr-2">1</span>
      # {{ description }}
    </p>

    <!-- Link -->
    <p class="text-gray-600">
      <span class="text-gray-500 mr-2">2</span>
      {{ text }}
      <a
        class="hover:text-orange-400 text-orange-300 transition-colors duration-200 cursor-pointer"
        @click="app?.updateSection(section)"
      >
        {{ link }} </a
      >.
    </p>
  </div>
</template>
