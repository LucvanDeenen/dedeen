<script setup lang="ts">
const bio = {
  summary: "I'm a software engineer with a passion for building scalable applications and exploring new technologies. With over 5 years of experience in full-stack development, I specialize in creating efficient, user-friendly solutions to complex problems.",
  interests: [
    "Cloud Architecture",
    "Machine Learning",
    "Open Source",
    "Developer Tools"
  ]
}
</script>

<template>
  <section class="project-card">
    <h3 class="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Bio</h3>
    <p class="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
      {{ bio.summary }}
    </p>
    <div>
      <h4 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">Areas of Interest</h4>
      <div class="flex flex-wrap gap-3">
        <span v-for="interest in bio.interests" 
              :key="interest"
              class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                     rounded-full text-sm font-medium">
          {{ interest }}
        </span>
      </div>
    </div>
  </section>
</template>