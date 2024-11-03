<script setup lang="ts">
const bio = {
  summary: `
    I’m a dedicated software engineer who enjoys tackling complex problems and 
		integrating new technologies to build meaningful solutions. 
		I have extensive experience in enterprise software development and
		excel at working with and improving existing codebases while consistently delivering quality results.
  `,
  interests: [
    "Automation",
    "Machine Learning",
    "Java Development",
    "Frontend",
    "Game Development",
		"3D Modelling",
    "DevTools"
  ]
}
</script>

<template>
  <section>
    <p class="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
      {{ bio.summary }}
    </p>
    <div>
      <h4 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">Areas of Interest</h4>
      <div class="flex flex-wrap gap-3">
        <span v-for="interest in bio.interests" :key="interest" class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                     rounded-full text-sm font-medium">
          {{ interest }}
        </span>
      </div>
    </div>
  </section>
</template>