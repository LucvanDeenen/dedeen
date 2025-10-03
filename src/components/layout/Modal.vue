<script setup lang="ts">
import { defineProps, defineEmits, watch, onBeforeUnmount } from "vue";

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
          class="relative flex flex-col bg-white dark:bg-gray-900 w-full h-screen overflow-y-auto z-10"
        >
          <!-- Header -->
          <div
            class="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700"
          >
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {{ title }}
            </h2>
            <button
              @click="emit('close')"
              class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              ✕
            </button>
          </div>

          <!-- Body -->
          <div class="flex-1 p-6 text-gray-800 dark:text-gray-200">
            <slot />
          </div>

          <!-- Footer -->
          <div
            class="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-2"
          >
            <slot name="footer">
              <button
                @click="emit('close')"
                class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Close
              </button>
            </slot>
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
