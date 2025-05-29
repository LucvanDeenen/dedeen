<script setup lang="ts">
defineProps<{
  override?: {
    type: boolean;
    default: false;
  };
  ref: string;
}>();
</script>

<template>
  <div :class="{ 'mb-12': !override }" :ref="ref" :id="ref">
    <slot></slot>
  </div>
</template>
