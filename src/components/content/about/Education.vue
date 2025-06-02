<script setup lang="ts">
import Content from "@/components/layout/Content.vue";
import persona from "@/assets/persona.json";
</script>

<template>
  <Content id-ref="education" class="mb-12">
    <h3 class="text-gray-500">// Education</h3>
    <div class="space-y-6">
      <div v-for="edu in persona.education" :key="edu.school">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h4>
              {{ edu.school }}
            </h4>
            <p>{{ edu.degree }}</p>
	          <p>{{ edu.period }}</p>
          </div>
        </div>
        <p class="mb-4">
          {{ edu.description }}
        </p>
        <ul class="list-disc list-inside space-y-2">
          <li v-for="achievement in edu.achievements" :key="achievement">
            {{ achievement }}
          </li>
        </ul>
      </div>
    </div>
  </Content>
</template>
