<template>
    <div>
        <v-btn @click="importJson">
            <v-icon>mdi-import</v-icon>
            <v-tooltip activator="parent" location="top">Import Model</v-tooltip>
        </v-btn>
        <v-btn disabled>
            <v-icon>mdi-share-variant</v-icon>
        </v-btn>
        <v-btn disabled>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn @click="importImage">
            <v-icon>mdi-image</v-icon>
            <v-tooltip activator="parent" location="top">Upload Tile</v-tooltip>
        </v-btn>
        <v-btn @click="exportToJson">
            <v-icon>mdi-export</v-icon>
            <v-tooltip activator="parent" location="top">Export Model</v-tooltip>
        </v-btn>
        <v-btn disabled>
            <v-icon>mdi-dots-grid</v-icon>
        </v-btn>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Mode } from '@/models/types';
import useEventsBus from '@/service/eventBus';

export default defineComponent({
    name: 'MenuFunctionalities',
    methods: {
        exportToJson: function () {
            const { emit } = useEventsBus();
            emit('export-json', Date.now()); 
        },

        importJson: function () {
            const { emit } = useEventsBus();
            emit('import-json', Date.now());
            this.$emit('update-action', Mode.Move);
        },
        importImage: function() {
            const { emit } = useEventsBus();
            emit('import-images', Date.now());
        }
    }
})
</script>