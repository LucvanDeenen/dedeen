<template>
  <v-view>
    <intro-page></intro-page>
  </v-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import IntroPage from '@/components/pages/IntroPage.vue';

export default defineComponent({
  name: 'Home',
  components: {
    IntroPage
  }
});
</script>