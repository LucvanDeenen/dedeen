<script setup lang="ts">
import { inject } from "vue";

const app: any = inject("app");
defineProps<{
  description: string;
  link: string;
  section: string;
}>();
</script>

<template>
  <div class="rounded bg-neutral-800 min-w-[500px] px-1 py-1 my-2">
    <!-- Description -->
    <p class="text-green-700">
      <span class="text-slate-600 mr-2">1</span># {{ description }}
    </p>

    <!-- Link -->
    <p>
      <span class="text-slate-600 mr-2">2</span>
      <a
        class="text-yellow-200 transition-colors duration-200 cursor-pointer"
        @click="app?.updateSection(section)"
      >
        {{ link }}<span class="text-yellow-500">()</span>
        <br />
      </a>
    </p>
  </div>
</template>

<style scoped></style>
