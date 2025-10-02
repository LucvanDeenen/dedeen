<script setup lang="ts">
import { ref } from "vue";
import Inspect from "@/components/layout/Inspect.vue";
import Modal from "@/components/layout/Modal.vue";
import Page from "@/components/layout/Page.vue";

import PersonalProjects from "@/components/content/projects/PersonalProjects.vue";
import PersonalDemos from "@/components/content/projects/PersonalDemos.vue";

const showModal = ref(false);
</script>

<template>
  <Page title="Projects">
    <template #header>
      <Inspect @popout="showModal = !showModal" />
    </template>

    <Modal :show="showModal" @close="showModal = false" >
      <PersonalDemos />
    </Modal>
    <PersonalProjects />
  </Page>
</template>
