<script setup lang="ts">
import { ref, provide, watch, nextTick, onMounted } from "vue";
import ExperiencePage from "@/pages/ExperiencePage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import HomePage from "@/pages/HomePage.vue";

const activeSection = ref();
const targetSection = ref();
const updateSection = (sectionId: string) => {
  targetSection.value = sectionId;
};

onMounted(() => {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.3 }
  );
  sections.forEach((section) => observer.observe(section));
});

watch(targetSection, async (newSection) => {
  if (!newSection) return;

  await nextTick();
  let el: HTMLElement | null = null;

  switch (newSection) {
    case "home-page":
      el = document.querySelector("#home-page");
      break;
    case "about-page":
      el = document.querySelector("#about-page");
      break;
    case "experience-page":
      el = document.querySelector("#experience-page");
      break;
    case "contact-page":
      el = document.querySelector("#contact-page");
      break;
  }
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    activeSection.value = newSection;
    targetSection.value = null;
  }
});
provide("app", { updateSection });
</script>

<template>
  <div class="overflow-x-hidden">
    <HomePage id="home-page" />
    <AboutPage id="about-page" />
    <ExperiencePage id="experience-page" />
    <ContactPage id="contact-page" />
  </div>
</template>
