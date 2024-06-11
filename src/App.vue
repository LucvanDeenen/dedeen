<template>
  <v-app class="gradient" id="app">
    <v-main>
      <!-- Update this to appropiate working node -->
      <router-view v-slot="{ Component }">
        <transition name="fade" enter-active-class="animated fade-in" leave-active-class="animated fade-out">
          <component :is="Component" />
        </transition>
      </router-view>

      <!-- Close button -->
      <div class="button-container" v-if="displayClose">
        <v-btn icon="mdi-close" href="/"></v-btn>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Screens } from './models/types';

export default defineComponent({
  name: 'App',
  computed: {
    displayClose() {
      return this.$route.name != Screens.Home;
    }
  }
})
</script>

<style>
@import '@/style/globalStyling.css';
@import '@/style/animations.css';
@import '@/style/positioning.css';
@import '@/style/components.css';

#app {
  background: linear-gradient(354deg, #000000, #1d1d1d);
  background-size: 400% 400%;

  max-height: 100vh;
  min-height: 100vh;
  overflow-y: auto;
}

.button-container {
  position: fixed;
  top: 20px;
  right: 20px;
}
</style>
