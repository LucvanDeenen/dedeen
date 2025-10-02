<script setup lang="ts">
import { ref } from "vue";
import Page from "@/components/layout/Page.vue";
import PersonalProjects from "@/components/content/projects/PersonalProjects.vue";
import PersonalDemos from "@/components/content/projects/PersonalDemos.vue";
import Inspect from "@/components/layout/Inspect.vue";

const show = ref(false);
</script>

<template>
  <Page title="Projects">
    <template #header>
      <Inspect @popout="show = !show" />
    </template>

    <PersonalDemos />
    <PersonalProjects />
  </Page>
</template>
