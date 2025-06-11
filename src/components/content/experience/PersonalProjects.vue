<script setup lang="ts">
import { ref } from "vue";
import Content from "@/components/layout/Content.vue";
import projects from "@/assets/projects.json";

const projectsEl = ref<{ contentEl: HTMLDivElement | null } | null>(null);
const targetCard = ref(0);

const scroll = (back: boolean) => {
  const el = projectsEl.value?.contentEl;
  if (!el) return;

  const card = el.querySelector(".content");
  if (!card) return;

  const cardWidth = card.clientWidth + 20;
  el.scrollBy({
    left: back ? cardWidth : -cardWidth,
    behavior: "smooth",
  });
};

const onScroll = () => {
  const el = projectsEl.value?.contentEl;
  if (!el) return;

  const cards = el.querySelectorAll<HTMLDivElement>(
    ".content.scroll-snap-center"
  );

  let closestIndex = 0;
  let closestDistance = Infinity;

  cards.forEach((card, index) => {
    const cardRect = card.getBoundingClientRect();
    const centerX = window.innerWidth / 2;
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const distance = Math.abs(centerX - cardCenterX);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  targetCard.value = closestIndex;
};
</script>

<template>
  <div>
    <h3 class="text-gray-500">// Projects</h3>
    <div class="relative">
      <!-- Left arrow -->
      <button
        @click="scroll(false)"
        class="overflow-button -left-2"
        v-if="targetCard > 0"
      >
        ‹
      </button>

      <!-- Scroll container -->
      <Content
        ref="projectsEl"
        id-ref="projects"
        @scroll.passive="onScroll"
        class="flex overflow-x-auto overflow-y-hidden gap-5 scroll-snap-x scroll-smooth hide-scrollbar sm:overflow-x-hidden"
      >
        <!-- Buffer -->
        <div class="content"></div>
        <div class="content"></div>

        <!-- Content -->
        <div
          class="content content-image scroll-snap-center relative overflow-hidden"
          :class="{
            'border-animate border-animate-active': index === targetCard,
            'border-animate': index !== targetCard,
          }"
          v-for="(project, index) in projects"
          :key="index"
        >
          <h3 class="mb-0">{{ project.title }}</h3>
          <a
            class="mb-0 text-gray-400"
            v-if="project.domain"
            :href="`https://${project.domain}.${project.tld}`"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
              />
            </svg>
            {{ project.domain }}.{{ project.tld }}
          </a>

          <div class="py-3">
            <p v-for="line in project.description">
              {{ line }}
            </p>
          </div>
          <br />
        </div>

        <!-- Buffer -->
        <div class="content"></div>
        <div class="content"></div>
      </Content>

      <!-- Right arrow -->
      <button
        @click="scroll(true)"
        class="overflow-button -right-2"
        v-if="targetCard < projects.length - 1"
      >
        ›
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.content {
  @apply min-h-[300px] max-h-[300px] sm:min-h-[500px] sm:max-h-[500px] min-w-[85vw];
  @apply rounded px-6 py-3 bg-neutral-800 select-none;
}

.content-image {
  @apply bg-cover bg-center;
}

.overflow-button {
  @apply absolute -translate-y-1/2 z-10 bg-neutral-800 text-white p-2 border rounded-full hidden sm:block top-1/2;
}

.overflow-button:hover {
  @apply text-yellow-500 border-yellow-500;
}

.border-animate::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 0%;
  background-color: #facc15; /* yellow-500 */
  transition: height 300ms ease;
}

.border-animate-active::before {
  height: 100%;
}
</style>
