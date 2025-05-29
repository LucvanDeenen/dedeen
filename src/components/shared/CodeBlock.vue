<script setup lang="ts">
import { inject } from "vue";
export type Block = {
  description: string;
  link: string;
  section: string;
};

defineProps<{
  block: Block[];
}>();
const app: any = inject("app");
</script>

<template>
  <div class="rounded bg-neutral-800 min-w-[300px] px-2 py-2 my-2">
    <div v-for="(line, index) in block" class="code-block">
      <p>
        <span class="text-slate-600 px-2 mr-2">{{ index + 1 }}</span>
        <a
          class="text-yellow-200 relative transition-colors cursor-pointer link"
          @click="app?.updateSection(line.section)"
          >{{ line.link }}
        </a>
        <span class="text-yellow-500">()</span>
        <span class="text-gray-500 comment sm:opacity-0">
          // {{ line.description }}
        </span>
      </p>
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
.code-block:hover {
  @apply active;
}
.comment {
  @apply transition-opacity duration-150;
}
.active .comment {
  @apply opacity-100;
}
</style>
