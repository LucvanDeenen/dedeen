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
    <div v-if="title" class="sticky top-0 z-40 backdrop-blur-sm">
      <!-- Title and Subtitle -->
      <div class="px-4 py-4">
        <h2 class="section-title">{{ title }}</h2>
      </div>

      <!-- Mobile Nav Toggle -->
      <button
        @click="app?.toggleNav?.()"
        class="lg:hidden p-2 transition-colors duration-300"
      >
        <Bars3Icon class="w-6 h-6" />
      </button>
    </div>

    <!-- Content -->
    <div class="px-4 py-4 h-full">
      <slot></slot>
    </div>
  </section>
</template>
