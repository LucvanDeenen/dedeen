<script setup lang="ts">
defineProps<{
  projects: Array<any>;
}>();
</script>

<template>
  <div class="flex flex-wrap gap-5">
    <div
      v-for="(project, key) in projects"
      :key="key"
      class="relative w-[400px] h-[300px] border rounded m-2 overflow-hidden transition-all duration-300 hover:w-[420px] hover:h-[320px] hover:cursor-pointer"
    >
      <div
        class="absolute inset-0 blur-sm"
        :style="{
          backgroundImage: `url(/src/assets/screenshots/${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      ></div>

      <div class="relative z-10 p-6">
        <h3 class="text-white font-semibold">// {{ project.title }}</h3>
        <p class="text-neutral-200">{{ project.subtitle }}</p>
      </div>
    </div>
  </div>
</template>
