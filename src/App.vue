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

watch(targetSection, async (target) => {
  if (!target) return;
  await nextTick();

  let el: HTMLElement | null = document.querySelector(`#${target}`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    activeSection.value = target;
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
