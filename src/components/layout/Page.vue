<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <section class="w-full min-h-screen">
    <!-- Header -->
    <div v-if="title" class="px-4 py-4 sticky top-0 z-40 backdrop-blur-sm">
      <h2 class="section-title">{{ title }}</h2>
    </div>

    <!-- Content -->
    <slot></slot>
  </section>
</template>
