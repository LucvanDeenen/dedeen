<script setup lang="ts">
import { inject } from "vue";
export type CodeBlock = {
  description: string;
  link: string;
  section: string;
};

const app: any = inject("app");
defineProps<{
  block: CodeBlock[];
}>();
</script>

<template>
  <div class="rounded bg-neutral-800 min-w-[500px] px-1 py-1 my-2 relative">
    <div v-for="(line, index) in block">
      <p>
        <span class="text-slate-600 mr-2">{{ index + 1 }}</span>
        <a
          class="text-yellow-200 relative transition-colors cursor-pointer link"
          @click="app?.updateSection(line.section)"
          >{{ line.link }}
        </a>
        <span class="text-yellow-500">()</span>
        <span class="text-green-800"> // {{ line.description }} </span>
      </p>

      <!-- Actions -->
      <div
        class="top-right text-slate-600 hover:text-slate-400 hover:cursor-pointer"
      >
        copy
      </div>
    </div>
  </div>
</template>

<style scoped>
.link:after {
  @apply content-[''] text-white absolute bottom-0 left-0 right-0 h-0.5 bg-current scale-x-0 origin-left;
}
.link:hover::after {
  @apply scale-x-100;
}
.top-right {
  @apply absolute top-0 right-2;
}
</style>
