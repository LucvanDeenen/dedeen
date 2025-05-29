<script setup lang="ts">
import persona from "@/assets/persona.json";
</script>

<template>
  <div>
    <p class="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
      {{ persona.summary }}
    </p>
    <div>
      <h4 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
        Areas of Interest
      </h4>
      <div class="flex flex-wrap gap-3">
        <span
          v-for="interest in persona.interests"
          :key="interest"
          class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
        >
          {{ interest }}
        </span>
      </div>
    </div>
  </div>
</template>
