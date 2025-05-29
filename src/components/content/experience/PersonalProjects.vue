<script setup lang="ts">
import Timeline from "@/components/shared/Timeline.vue";
import Content from "@/components/layout/Content.vue";
import projects from "@/assets/projects.json";
</script>

<template>
  <Content idRef="projects">
    <Timeline title="Personal Projects" :items="projects" />
  </Content>
</template>
