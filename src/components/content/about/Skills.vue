<script setup lang="ts">
import persona from "@/assets/persona.json";
interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = persona.skills;
</script>

<template>
  <div>
    <h3 class="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
      Technical Skills
    </h3>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="category in skillCategories"
        :key="category.name"
        class="project-card"
      >
        <h4 class="text-lg font-medium mb-6 text-gray-800 dark:text-gray-200">
          {{ category.name }}
        </h4>
        <div class="space-y-4">
          <div
            v-for="skill in category.skills"
            :key="skill.name"
            class="space-y-2"
          >
            <div class="flex justify-between text-sm">
              <span class="text-gray-700 dark:text-gray-300">{{
                skill.name
              }}</span>
              <span class="text-gray-500 dark:text-gray-400"
                >{{ skill.level }}/5</span
              >
            </div>
            <div
              class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
            >
              <div
                class="h-full bg-black dark:bg-white rounded-full transition-all duration-300"
                :style="{ width: `${(skill.level / 5) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
