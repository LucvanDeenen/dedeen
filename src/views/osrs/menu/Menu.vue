<template>
  <div>
    <div class="page-container">
      <!-- Menu -->
      <div class="tile-menu-container">
        <div class="tile" v-for="(item, index) in menuItems" :key="index"
          :style="{ backgroundImage: 'url(' + item.image + ')' }" @click="goTo(item.link)">
          <v-icon style="font-size: 48px;">{{ item.icon }}</v-icon>
          <div style="font-size: 10px">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TileMenu',
  data() {
    return {
      menuItems: [
        { icon: 'mdi-sword-cross', name: 'Clan Events', link: '/clan-events', image: '/src/assets/images/clan.jpg' },
        { icon: 'mdi-trophy', name: 'Hiscores', link: '/hiscores', image: '/src/assets/images/hiscores.jpg' },
        { icon: 'mdi-account-group', name: 'Matchmaking', link: '/matchmaking', image: '/src/assets/images/matchmaking.jpg' },
      ],
    };
  },
  methods: {
    goTo(link: string) {
      this.$router.push(link);
    },
  },
});
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.tile-menu-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  max-width: 90vh;
  overflow: auto;
}

.tile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vh;
  height: 20vh;
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  opacity: 0.5;
  transition: filter 0.5s, width 0.15s, height 0.15s, opacity 0.5s;

  &:hover {
    filter: none;
    width: calc(20vh + 5px);
    height: calc(20vh + 5px);
    opacity: 1;
  }
}
</style>
