<script setup lang="ts">
defineProps<{
  override?: {
    type: boolean;
    default: false;
  };
  idRef: string;
}>();
</script>

<template>
  <div :class="{ 'mb-12': !override }" :ref="idRef" :id="idRef">
    <slot></slot>
  </div>
</template>
