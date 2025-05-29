<script setup lang="ts">
import persona from "@/assets/persona.json";
interface Education {
  school: string;
  degree: string;
  period: string;
  description: string;
  achievements: string[];
}

const education: Education[] = persona.education;
</script>

<template>
  <div>
    <h3 class="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
      Education
    </h3>
    <div class="space-y-6">
      <div v-for="edu in education" :key="edu.school">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ edu.school }}
            </h4>
            <p class="text-gray-600 dark:text-gray-400">{{ edu.degree }}</p>
          </div>
          <span class="text-gray-500 dark:text-gray-400">{{ edu.period }}</span>
        </div>
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          {{ edu.description }}
        </p>
        <ul
          class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"
        >
          <li v-for="achievement in edu.achievements" :key="achievement">
            {{ achievement }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
