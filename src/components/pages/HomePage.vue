<script setup lang="ts">
import Page from "../layout/Page.vue";
import Welcome from "../features/home/Welcome.vue";
</script>

<template>
  <Page class="bg-svg mask-half-fade">
    <Welcome />
  </Page>
</template>

<style scoped>
.bg-svg {
  background-image: url("../../assets/parabolic-rectangle.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.mask-half-fade {
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
}
</style>
