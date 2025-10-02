<script setup lang="ts">
import { Squares2X2Icon } from "@heroicons/vue/24/outline";
const emit = defineEmits(["popout"]);

function handlePopout() {
  emit("popout");
}
</script>

<template>
  <div class="ml-auto">
    <button type="button" class="btn btn-outline-primary" @click="handlePopout">
      <Squares2X2Icon class="sm:w-10 w-7 mr-1 text-yellow-500" />
    </button>
  </div>
</template>
