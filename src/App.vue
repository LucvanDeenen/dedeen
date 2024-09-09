<template>
  <v-app id="app">
    <v-main>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>

<style>
body {
  background-color: #212121;
  color: #f1f1f1
}
</style>
