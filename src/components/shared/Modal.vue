<script setup lang="ts">
import { defineProps, defineEmits, watch, onBeforeUnmount } from "vue";
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{
  show: boolean;
  title?: string;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const toggleBodyScroll = (enabled: boolean) => {
  const classList = document.body.classList;
  if (enabled) {
    classList.add("overflow-hidden");
  } else {
    classList.remove("overflow-hidden");
  }
};

watch(
  () => props.show,
  (newVal) => {
    toggleBodyScroll(newVal);
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  toggleBodyScroll(false);
});
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="show" class="fixed inset-0 z-50 flex flex-col">
        <!-- Background overlay -->
        <div
          class="absolute inset-0 bg-black bg-opacity-50"
          @click="emit('close')"
        ></div>

        <!-- Full-screen modal container -->
        <div
          class="relative flex flex-col bg-neutral-900 w-full h-screen overflow-y-auto z-10 p-5"
        >
          <!-- Header -->
          <div class="flex justify-between items-center p-4 mb-6">
            <div class="flex items-center">
              <ChevronDoubleRightIcon
                class="sm:w-10 w-10 mr-1 text-yellow-500"
              />
              <h2>
                {{ title }}
              </h2>
            </div>

            <button
              @click="emit('close')"
              class="text-gray-500 hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
          </div>

          <!-- Body -->
          <div
            class="flex-1 p-6 m-6 border-l-4 rounded border-yellow-500 bg-neutral-800"
          >
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
