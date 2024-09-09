<template>
    <div v-if="tiles!.values.length > 0" class="tiles-menu">

        <v-menu v-for="tile in tiles!.values" :close-on-content-click="false" v-model="tile.menu">

            <template v-slot:activator="{ props: menu }">
                <v-card class="pa-3 ma-1 border" v-bind="menu">
                    <v-img :src="tile.url" class="non-select" width="25px" height="25px"></v-img>
                    <v-tooltip activator="parent" location="top">{{ tile.name }}</v-tooltip>
                </v-card>
            </template>
            <div>
                <v-text-field class="text-input" variant="outlined" density="compact" bg-color="#212121" type="number" dense
                    hide-details v-model="tile.amount" :label="tile.type == 'item' as TileType ? 'Amount' : 'Level'" />

                <div class="top-right text-input-confirm">
                    <v-btn class="create-btn" icon="mdi-plus" color="primary" @click="handleCreate(tile)"></v-btn>
                </div>
            </div>
        </v-menu>

    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { TileDetails, TileInstance } from '@/models/tile';
import { DraggableDetails, setItem } from '@/models/item';
import { TileType } from '@/models/types';

import useEventsBus from '@/service/eventBus';

export default defineComponent({
    name: 'Tiles',
    props: {
        tiles: Object as PropType<TileInstance>
    },

    methods: {
        handleCreate: function (tile: TileDetails) {
            const item = setItem(tile) as DraggableDetails;

            const { emit } = useEventsBus();
            emit('add-item', item);

            tile.menu = false;
            tile.amount = undefined;
        }
    }
})
</script>

<style scoped>
.tiles-menu {
    min-width: 190px;
    max-width: 190px;
    display: flex;
    overflow-y: scroll;
    flex-wrap: wrap;
    direction: rtl;
    margin-left: -4px
}

.create-btn {
    font-size: 10px;
    width: 25px;
    height: 25px;
}
</style>@/service/EventBus