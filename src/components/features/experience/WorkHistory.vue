<script setup lang="ts">
import Timeline from '../../shared/Timeline.vue'

const workHistory = [
  {
    title: "ilionx B.V.",
    subtitle: "Software Engineer / Software Consultant",
    period: "2022 - Present",
    description: [
      `Served as a consultant for VodafoneZiggo’s NaaS unit, progressing from an initial role as one of eight developers to becoming the lead developer, overseeing team operations and project delivery. 
      Work encompassed a range of responsibilities, from automating processes to integrating new systems and contributing to the development of innovative solutions.`,
      `Enhanced the functionality of 'Partner in Balans', a healthcare application, by implementing significant improvements across both the frontend and backend systems.`
    ],
    technologies: [
      "Spring",
      "Java",
      "Kotlin",
      "Typescript",
      "Angular",
      "Jenkins",
      "AWS"
    ]
  },
  {
    title: "LUC B.V.",
    subtitle: "Software Engineer",
    period: "2021 - 2022",
    description: [
      "Contributed to the development and optimization of an in-house fat client application to streamline and enhance the production workflow.",
      "Led the development of a new system architecture to revamp and modernize the fat client application."
    ],
    technologies: [
      ".NET", 
      "Vue.JS", 
      "VB.NET"
    ]
  }
]
</script>

<template>
  <Timeline id="work" title="Work History" :items="workHistory" />
</template>