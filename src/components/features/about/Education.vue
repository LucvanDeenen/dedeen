<script setup lang="ts">
interface Education {
  school: string
  degree: string
  period: string
  description: string
  achievements: string[]
}

const education: Education[] = [
  {
    school: "University of Technology",
    degree: "Master of Science in Computer Science",
    period: "2018 - 2020",
    description: "Specialized in Machine Learning and Distributed Systems",
    achievements: [
      "Published research paper on distributed ML algorithms",
      "Teaching Assistant for Advanced Algorithms course",
      "4.0 GPA"
    ]
  },
  {
    school: "Tech Institute",
    degree: "Bachelor of Science in Software Engineering",
    period: "2014 - 2018",
    description: "Focus on Software Architecture and Web Technologies",
    achievements: [
      "Dean's List all semesters",
      "Led university hackathon team to first place",
      "Completed internship at major tech company"
    ]
  }
]
</script>

<template>
  <section>
    <h3 class="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">Education</h3>
    <div class="space-y-6">
      <div v-for="edu in education" 
           :key="edu.school"
           class="project-card">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">{{ edu.school }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ edu.degree }}</p>
          </div>
          <span class="text-gray-500 dark:text-gray-400">{{ edu.period }}</span>
        </div>
        <p class="text-gray-700 dark:text-gray-300 mb-4">{{ edu.description }}</p>
        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li v-for="achievement in edu.achievements" 
              :key="achievement">
            {{ achievement }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>