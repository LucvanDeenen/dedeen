<script setup lang="ts">
import Timeline from '@/components/shared/Timeline.vue'
import projects from '@/assets/projects.json';
</script>

<template>
  <Timeline id="projects" title="Personal Projects" :items="projects" />
</template>