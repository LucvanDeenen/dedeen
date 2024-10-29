<script setup lang="ts">
import { inject } from 'vue'

const app: any = inject('app')

const navigateToPage = () => {
  app?.updateSection('about')
}
</script>

<template>
  <section class="w-full flex-shrink-0 h-screen overflow-y-auto">
    <div class="flex flex-col items-center justify-center h-full text-center px-4">
      <div class="flex flex-col items-center">
        <h1 class="text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
          Welcome
        </h1>
        <div class="flex items-center gap-2 mt-2 mb-6">
          <div class="h-1 w-12 bg-black dark:bg-white rounded-full"></div>
          <div class="h-1 w-6 bg-black dark:bg-white rounded-full opacity-60"></div>
          <div class="h-1 w-3 bg-black dark:bg-white rounded-full opacity-30"></div>
        </div>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
          I'm a passionate software engineer focused on creating elegant solutions to complex problems.
        </p>
        <button 
          @click="navigateToPage"
          class="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg 
                 transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                 font-medium text-lg">
          View My Work
        </button>
      </div>
    </div>
  </section>
</template>