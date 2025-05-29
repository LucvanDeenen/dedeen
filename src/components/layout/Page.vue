<script setup lang="ts">
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";
defineProps<{
  title?: string;
}>();
</script>

<template>
  <section class="w-full min-h-screen">
    <!-- Header -->
    <div v-if="title" class="px-4 py-4 top-0 z-40 flex">
      <ChevronDoubleRightIcon
        class="sm:w-10 sm:h-10 w-7 h-7 mr-1 text-yellow-500"
      />
      <h2 class="section-title sm:text-4xl text-xl">
        {{ title }}
      </h2>
    </div>

    <!-- Content -->
    <div :class="{ 'px-6 sm:text-base text-sm': title }">
      <slot></slot>
    </div>
  </section>
</template>
