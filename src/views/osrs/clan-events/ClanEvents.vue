<template>
  <v-container>
    <v-card>
      <v-card-title>Clan Events</v-card-title>
      <v-data-table :items="lobbies"></v-data-table>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Lobby {
  activity: string;
  name: string;
  players: {
    current: number;
    max: number;
  };
}

export default defineComponent({
  name: 'ClanEvents',
  data() {
    return {
      lobbies: [
        {
          activity: 'Raids',
          name: 'Test',
          players: { current: 3, max: 5 }
        },
        {
          activity: 'Raids',
          name: 'Test',
          players: { current: 3, max: 5 }
        }
      ] as Lobby[],
    };
  }
});
</script>