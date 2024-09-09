<template>
    <div class="top-left border mx-2 my-4">

        <!-- Board functionalities: Drag/Move/Create -->
        <actions class="menu" :action="board?.action" @update-action="toggleAction" />
        <v-divider class="ma-2"></v-divider>

        <!-- Model functionalities: Import/Export etc. -->
        <functionalities class="menu" @update-action="toggleAction" />
        <v-divider class="ma-2"></v-divider>

        <!-- Addable items -->
        <tiles class="menu" :tiles="tiles" />

        <!-- Modals: -->
        <image-export :isActive="board?.images" @close="toggleImage"></image-export>

    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, watch } from 'vue';

import { BoardInstance } from '@/models/board';
import { TileInstance } from '@/models/tile';
import { Mode } from '@/models/types';

import Functionalities from './Menu/Functionalities.vue';
import Actions from './Menu/Actions.vue';
import Tiles from './Menu/Tiles.vue';
import useEventsBus from '@/service/eventBus';
import ImageExport from './Modals/ImageExport.vue';

export default defineComponent({
    name: 'BuilderMenu',
    props: {
        tiles: Object as PropType<TileInstance>,
        board: Object as PropType<BoardInstance>,
    },

    components: {
        Actions,
        Tiles,
        Functionalities,
        ImageExport
    },

    methods: {
        toggleAction: function (action: Mode) {
            this.board!.action = action;
            localStorage.setItem('action', action);

            const { emit } = useEventsBus();
            emit('action', action);
        },

        toggleSetting: function (settingId: string) {
            this.board!.settings.includes(settingId)
                ? this.board!.settings.splice(this.board!.settings.indexOf(settingId), 1)
                : this.board!.settings.push(settingId);

            localStorage.setItem('settings', this.board!.settings.toString());
        },
        
        toggleImage: function() {
          this.board!.images = false;
        }
    },

    mounted() {
        const { bus } = useEventsBus();

        // Event Bus: Add item
        watch(() => bus.value.get('add-item'), () => {
            this.toggleAction(Mode.Drag);
        });
        // Event Bus: Importing Json data
        watch(() => bus.value.get('import-json'), () => {
            this.toggleAction(Mode.Drag);
        });

        // Event Bus: add new images UI
        watch(() => bus.value.get('import-images'), () => {
            this.board!.images = true;
        });

        // Event Bus: add new images UI
        watch(() => bus.value.get('upload-tiles'), () => {
            this.board!.images = true;
        });
    }
})
</script>@/service/EventBus