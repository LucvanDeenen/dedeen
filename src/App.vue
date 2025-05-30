<script setup lang="ts">
import { ref, provide, watch, nextTick, onMounted } from "vue";
import ExperiencePage from "@/pages/ExperiencePage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import HomePage from "@/pages/HomePage.vue";

import { ChevronUpIcon } from '@heroicons/vue/24/solid'

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
		<!-- Move this into a separate component -->
		<div class="sm:top-right bottom-right transition-all opacity-0" :class="{'opacity-100': activeSection !== 'home-page'}">
			<button class="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-300 flex items-center justify-center">
		    <ChevronUpIcon class="w-5 h-5 text-gray-500" />
			</button>
		</div>
    <HomePage id="home-page" />
    <AboutPage id="about-page" />
    <ExperiencePage id="experience-page" />
    <ContactPage id="contact-page" />
  </div>
</template>

<style scoped>
.top-right {
	@apply fixed top-0 right-0
}
.bottom-right {
	@apply fixed bottom-0 right-0
}
</style>
