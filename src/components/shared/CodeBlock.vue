<script setup lang="ts">
import { inject } from "vue";
import {
  ClipboardIcon,
} from "@heroicons/vue/24/outline";

const app: any = inject("app");
defineProps<{
  description: string;
  link: string;
  section: string;
}>();
</script>

<template>
  <div class="rounded bg-neutral-800 min-w-[500px] px-1 py-1 my-2 relative">
    <!-- Comment -->
    <p class="text-green-700">
      <span class="text-slate-600 mr-2">1</span># {{ description }}
    </p>

    <!-- Method -->
    <p>
      <span class="text-slate-600 mr-2">2</span>
      <a
        class="text-yellow-500 relative transition-colors cursor-pointer"
        @click="app?.updateSection(section)"
      >
        <span class="text-yellow-200 link">{{ link }}</span
        >()
      </a>
    </p>

    <!-- Actions -->
    <div class="top-right text-slate-600 hover:text-slate-400 hover:cursor-pointer">
      copy
    </div>
  </div>
</template>

<style scoped>
.link:after {
  @apply content-[''] absolute bottom-0 left-0 right-4 h-0.5 bg-current scale-x-0 origin-left;
}
.link:hover::after {
  @apply scale-x-100;
}

.top-right {
  @apply absolute top-0 right-2
}
</style>
