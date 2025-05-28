<script setup lang="ts">
import { ref, provide } from "vue";
import Navigation from "./components/layout/Navigation.vue";
import HomePage from "./components/pages/HomePage.vue";
import ExperiencePage from "./components/pages/ExperiencePage.vue";
import AboutPage from "./components/pages/AboutPage.vue";
import ContactPage from "./components/pages/ContactPage.vue";

const activeSection = ref("home");
const updateSection = (sectionId: string) => {
  activeSection.value = sectionId;
  if (sectionId === "home") {
    isNavOpen.value = false;
  }
};

const isNavOpen = ref(false);
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

provide("app", { updateSection, toggleNav });

import { watch, nextTick } from "vue";
watch(activeSection, async (newSection) => {
  await nextTick();
  let el: HTMLElement | null = null;
  switch (newSection) {
    case "about":
      el = document.querySelector("#about-page");
      break;
    case "experience":
      el = document.querySelector("#experience-page");
      break;
    case "contact":
      el = document.querySelector("#contact-page");
      break;
    case "home":
      el = document.querySelector("#home-page");
      break;
  }
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
});
</script>

<template>
  <div
    class="flex min-h-[100dvh] transition-colors duration-300"
  >
    <!-- Navigation with transitions -->
    <!-- <div
      class="fixed left-0 top-0 h-[100dvh] lg:w-[30%] z-[51] transition-transform duration-500"
      :class="[
        isNavOpen ? '-translate-x-full' : 'lg:translate-x-0',
        { '-translate-x-full': !isNavOpen },
      ]"
    >
      <Navigation @close="toggleNav" />
    </div> -->

    <!-- Overlay for mobile nav -->
    <!-- <div
      v-if="!isNavOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50"
      @click="toggleNav"
    ></div> -->

    <!-- Main Content -->
    <div class="overflow-x-hidden transition-all duration-500 min-w-[300px]">
      <HomePage id="home-page" />
      <AboutPage id="about-page" />
      <ExperiencePage id="experience-page" />
      <ContactPage id="contact-page" />
    </div>
  </div>
</template>