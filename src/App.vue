<script setup lang="ts">
import { ref, provide, watch, nextTick } from "vue";
import ExperiencePage from "@/pages/ExperiencePage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import HomePage from "@/pages/HomePage.vue";

const activeSection = ref("home");
const updateSection = (sectionId: string) => {
  activeSection.value = sectionId;
};

watch(activeSection, async (newSection) => {
  await nextTick();
  let el: HTMLElement | null = null;
  switch (newSection) {
    case "home":
      el = document.querySelector("#home-page");
      break;
    case "about":
      el = document.querySelector("#about-page");
      break;
    case "experience":
      el = document.querySelector("#experience-page");
      break;
    case "contact":
      el = document.querySelector("#contact-page");
      break;
  }
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
});
provide("app", { updateSection });
</script>

<template>
  <!-- Main Content -->
  <div class="overflow-x-hidden">
    <HomePage id="home-page" />
    <AboutPage id="about-page" />
    <ExperiencePage id="experience-page" />
    <ContactPage id="contact-page" />
  </div>
</template>
