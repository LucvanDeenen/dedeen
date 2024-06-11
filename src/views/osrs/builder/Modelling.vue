<template>
  <v-container fluid class="fill-height">

    <builder :lines="lines" :items="items" @update-line="updateLine" @remove-line="removeLine" @update-item="updateItem"
      @remove-item="removeItem"></builder>

    <builder-menu :board="board" :tiles="tiles"></builder-menu>

    <loader :toggle="board.loading" />

    <default-actions></default-actions>

  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

import { DraggableDetails, DraggableInstance } from '@/models/item';
import { TileInstance, getTiles } from '@/models/tile';
import { LineDetails, LineInstance } from '@/models/line';
import { BoardInstance, getBoard } from '@/models/board';

import BuilderMenu from '@/components/ModelBuilder/Menu.vue';
import Builder from '@/components/ModelBuilder/Builder.vue';
import Loader from '@/components/Loader.vue';
import DefaultActions from '@/components/DefaultActions.vue';

import firebase from '@/service/api/firebase';

export default defineComponent({
  name: 'Modelling',
  components: {
    BuilderMenu,
    Builder,
    Loader,
    DefaultActions,
  },

  data() {
    return {
      items: {} as DraggableInstance,
      lines: {} as LineInstance,
      tiles: getTiles() as TileInstance,
      board: getBoard() as BoardInstance,
      store: useStore(),
    }
  },

  computed: {
    getStoredItems(): DraggableInstance {
      return this.store.getters.getPositions;
    },
    getStoredLines(): LineInstance {
      return this.store.getters.getLines;
    },
  },

  async mounted() {
    await firebase.getImages('osrs/icons')
      .then(tiles => this.tiles.values = tiles)
      .then(() => this.board.loading = false);

    this.items = this.getStoredItems;
    this.lines = this.getStoredLines;
  },

  methods: {
    updateLine: function (line: LineDetails) {
      this.store.commit('setLine', { line: line });
    },

    removeLine: function (lineId: string) {
      this.store.commit('removeLine', { internalId: lineId });
    },

    updateItem: function (item: DraggableDetails) {
      this.store.commit('setPosition', { item: item });
    },

    removeItem: function (itemId: string) {
      this.store.commit('removePosition', { internalId: itemId });
    },
  },
})
</script>