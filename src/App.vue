<script setup lang="ts">
import { ref, provide, watch, nextTick, onMounted } from "vue";
import ExperiencePage from "@/pages/ExperiencePage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import HomePage from "@/pages/HomePage.vue";

import { ChevronDoubleUpIcon } from "@heroicons/vue/24/solid";

const activeSection = ref("home-page");
const targetSection = ref(null);
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
    { threshold: 0.5 }
  );
  sections.forEach((section) => observer.observe(section));
});

watch(targetSection, async (target) => {
  if (!target) return;
  await nextTick();

  let el: HTMLElement | null = document.querySelector(`#${target}`);
  if (el) {
    const offset = window.innerHeight / 8;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    activeSection.value = target;
    targetSection.value = null;
  }
});
provide("app", { updateSection });
</script>

<template>
  <div class="overflow-x-hidden">
    <div
      class="fixed bottom-5 right-5 z-50 transition-all opacity-0"
      :class="{ 'opacity-100': activeSection !== 'home-page' }"
      @click="updateSection('home-page')"
    >
      <button
        class="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center"
      >
        <ChevronDoubleUpIcon class="w-5 h-5 hover:text-yellow-500" />
      </button>
    </div>
    <HomePage id="home-page" class="mb-12" />
    <AboutPage id="about-page" />
    <ExperiencePage id="experience-page" />
    <ContactPage id="contact-page" />
  </div>
</template>
