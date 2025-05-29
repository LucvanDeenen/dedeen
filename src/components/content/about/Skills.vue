<script setup lang="ts">
import Content from "@/components/layout/Content.vue";
import persona from "@/assets/persona.json";
</script>

<template>
  <Content ref="skills" class="mb-12">
    <h3 class="text-gray-500">// Technical Skills</h3>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="category in persona.skills"
        :key="category.name"
        class="project-card"
      >
        <h4>
          {{ category.name }}
        </h4>
        <div class="space-y-4">
          <div
            v-for="skill in category.skills"
            :key="skill.name"
            class="space-y-2"
          >
            <div class="flex justify-between text-sm">
              <span class="text-gray-300">{{ skill.name }}</span>
              <span class="text-gray-400">{{ skill.level }}/5</span>
            </div>
            <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                class="h-full bg-white rounded-full transition-all duration-300"
                :style="{ width: `${(skill.level / 5) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Content>
</template>
