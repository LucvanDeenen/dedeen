<script setup lang="ts">
import Timeline from "@/components/shared/Timeline.vue";
import persona from "@/assets/persona.json";

const workHistory = persona.experience;
</script>

<template>
  <Timeline id="work" title="Work History" :items="workHistory" />
</template>
