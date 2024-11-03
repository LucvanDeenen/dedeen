<script setup lang="ts">
import Timeline from '../../shared/Timeline.vue'

const projects = [
  {
    title: "Portfolio Website",
    subtitle: "Personal Website - Dedeen.nl",
    description: [
      "A responsive portfolio website built with Vue 3 and Tailwind CSS.",
      "Setup automatic deployment with Github Actions and Firebase hosting.",
      "Optimized for performance and accessibility."
    ],
    technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "Github Actions"]
  }
]
</script>

<template>
  <Timeline id="projects" title="Personal Projects" :items="projects" />
</template>