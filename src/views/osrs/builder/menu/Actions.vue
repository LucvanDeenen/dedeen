<template>
    <div class="pa-3" style="justify-content: space-evenly;">
        <v-btn @click="$emit('update-action', 'move')" :color="action == 'move' ? 'primary' : 'select'" icon="mdi-hand">
        </v-btn>
        <v-btn @click="$emit('update-action', 'drag')" :color="action == 'drag' ? 'primary' : 'select'" icon="mdi-cursor-move">
        </v-btn>
        <v-btn  @click="$emit('update-action', 'link')" :color="action == 'link' ? 'primary' : 'select'"  icon="mdi-draw">
        </v-btn>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Mode } from '@/models/types';

export default defineComponent({
    name: 'ActionsMenu',
    props: {
        action: String as PropType<Mode>,
    },
})
</script>