<script setup lang="ts">
import Timeline from '../../shared/Timeline.vue'

const projects = [
  {
    title: "Cooking App",
    links: {
      github: "https://github.com/LucvanDeenen/munch",
      demo: "https://cooking-d8911.web.app/"
    },
    subtitle: "An app used to aid in cooking!",
    description: [
      "The application keeps track of certain ingredients and then shows you which recipes you can make.",
      "The recipes contain step-by-step instructions on how to make them.",
      "Setup storage using and deployed with firebase."
    ],
    technologies: ["Vue 3", "TypeScript", "Firebase", "Github Actions", "Tailwind"]
  },
  {
    title: "Party App",
    links: {
      github: "https://github.com/LucvanDeenen/PartyApp",
      demo: "https://sjoelen-39112.web.app/"
    },
    subtitle: "A party games app!",
    description: [
      "Build an application for keeping track of scores in party games.",
      "Setup authentication and storage in firebase.",
      "Created an android App for Smart TV's to showcase the hiscores and games on your TV!",
      "Used different AI tools like, ChatGPT and Bolt to see how fast development can be when making the most of these tools."
    ],
    technologies: ["Vue 3", "TypeScript", "Firebase", "Github Actions", "Kotlin", "Android Studio", "Bolt"]
  },
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