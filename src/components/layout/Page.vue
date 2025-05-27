<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { inject } from "vue";

defineProps<{
  title?: string;
}>();

const app = inject<{
  updateSection: (section: string) => void;
  toggleNav?: () => void;
}>("app");
</script>

<template>
  <section class="w-full h-screen overflow-y-auto">
    <!-- Header -->
    <div
      v-if="title"
      class="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
    >
      <!-- Title and Subtitle -->
      <div class="px-4 py-4">
        <h2 class="section-title">{{ title }}</h2>
      </div>

      <!-- Mobile Nav Toggle -->
      <button
        @click="app?.toggleNav?.()"
        class="lg:hidden p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
      >
        <Bars3Icon class="w-6 h-6 text-gray-900 dark:text-white" />
      </button>
    </div>

    <!-- Content -->
    <div class="px-4 py-4">
      <slot></slot>
    </div>
  </section>
</template>
