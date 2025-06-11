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
        :override="{ type: true, default: false }"
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
          <div class="absolute top-0 right-0 mr-2 mt-4">
            <!-- GitHub Icon -->
            <a
              v-if="project.links?.github"
              :href="project.links?.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block mx-1"
              title="View on GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400 hover:text-yellow-500 transition-colors"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
                />
              </svg>
            </a>

            <!-- Demo Icon -->
            <a
              v-if="project.links?.demo"
              :href="project.links?.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block mx-1"
              title="View Demo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400 hover:text-yellow-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
                <path
                  d="M8 21h8"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M12 17v4"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <polygon points="10,8 16,12 10,16" fill="currentColor" />
              </svg>
            </a>
          </div>
          <h3 class="mb-0 text-yellow-500">{{ project.title }}</h3>
          <p>{{ project.summary }}</p>

          <div class="py-3">
            <p v-for="line in project.description">- {{ line }}</p>
          </div>
          <br />
        </div>

        <!-- Buffer -->
        <div class="content"></div>
        <div class="content"></div>
      </Content>
      <div class="flex justify-center my-4">
        <div
          v-for="i in projects.length"
          class="w-2 h-2 rounded-full shadow-md mx-2 transition-colors duration-300"
          :class="i - 1 === targetCard ? 'bg-yellow-500' : 'bg-neutral-700'"
        ></div>
      </div>

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
  @apply min-h-[400px] max-h-[400px] sm:min-h-[500px] sm:max-h-[500px] min-w-[85vw];
  @apply rounded px-6 pt-3 bg-neutral-800 select-none;
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
