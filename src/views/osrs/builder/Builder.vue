<template>
    <v-container class="container fill-height" id="builder" fluid :style="{ transform: `translate(${translateX}px, ${translateY}px) scale(${scale})` }">

        <Draggable v-for="(item, key) in items!.values" :key="key" :item="item" @create-line="createLine"
            @connect-line="connectLine" @update-drag="updateDrag" @remove-item="removeItem" @save-position="saveItem" />

        <svg width="100%" height="100%">
            <Line v-for="(line, key) in lines!.values" :key="key" :line="line" @remove-line="removeLine" />
        </svg>

    </v-container>
</template>
  
<script lang="ts">
import { defineComponent, PropType, watch } from 'vue';

import { DraggableInstance, DraggableDetails } from '@/models/item';
import { LineDetails, LineInstance, setLine } from '@/models/line';

import Draggable from './Draggables/Draggable.vue';
import Line from './Draggables/Line.vue';

import useEventsBus from '@/service/eventBus';
import { importJson, exportToJson } from '@/service/modelBuilder';

export default defineComponent({
    name: 'Builder',
    props: {
        items: Object as PropType<DraggableInstance>,
        lines: Object as PropType<LineInstance>,
    },

    data() {
        return {
            isPanning: false,
            startX: 0,
            startY: 0,
            translateX: 0,
            translateY: 0,
            scale: 1,
        };
    },

    components: {
        Draggable,
        Line,
    },

    methods: {
        /* Item functionality */
        removeItem: function (itemId: string) {
            const lines = this.items!.values[itemId].lines;
            lines.forEach(lineId => {
                const line = this.lines!.values[lineId];

                if (line.startId != itemId) {
                    const start = this.items!.values[line.startId].lines;
                    start.splice(start.indexOf(lineId), 1);
                }

                if (line.endId != itemId) {
                    const end = this.items!.values[line.endId].lines;
                    end.splice(end.indexOf(lineId), 1);
                }

                this.$emit('removeLine', lineId as string);
                delete this.lines!.values[lineId];
            });

            this.$emit('removeItem', itemId as string);
            delete this.items!.values[itemId];
        },

        saveItem: function (item: DraggableDetails) {
            this.$emit('updateItem', item as DraggableDetails);
            item.lines?.forEach(line => this.saveLine(this.lines!.values[line]));
        },

        updateDrag: function (item: DraggableDetails) {
            const lines = this.lines!.values;
            item.lines?.forEach(lineId => {
                const line = lines[lineId];
                line.endId == item.internalId ?
                    line.end = { top: item.top, left: item.left } :
                    line.start = { top: item.top, left: item.left };
            });
        },

        /* Line functionality */
        createLine: function (item: DraggableDetails) {
            const line = setLine(item);
            this.lines!.values[line.internalId] = line;
            this.lines!.selected = line.internalId;
        },

        removeLine: function (lineId: string) {
            if (lineId == undefined && this.lines!.selected == undefined) return;
            const id = lineId ? lineId : this.lines!.selected!;

            this.$emit('removeLine', lineId as string);
            delete this.lines!.values[id];
        },

        connectLine: function (item: DraggableDetails) {
            if (this.lines!.selected == undefined) return;
            const line = this.lines!.values[this.lines!.selected];

            if (line.startId == item.internalId) return;
            line.endId = item.internalId;
            line.end = {
                top: item.top + (item.entity!.clientHeight / 2),
                left: item.left + (item.entity!.clientWidth / 2)
            };

            this.items!.values[line.startId].lines
                .push(this.lines!.selected);
            this.items!.values[line.endId].lines
                .push(this.lines!.selected);

            this.saveLine(line);
            line.selected = false;
            this.lines!.selected = undefined;
        },

        saveLine: function (line: LineDetails) {
            this.$emit('update-line', line as LineDetails)
        },
    },

    mounted() {
        // Event Bus 
        const { bus } = useEventsBus();

        // Event Bus: Add item
        watch(() => bus.value.get('add-item'), (item: DraggableDetails) => {
            this.items!.values[item.internalId] = item;
        });

        // Event Bus: Export Json data
        watch(() => bus.value.get('export-json'), () => {
            try {
                exportToJson(this.items!, this.lines!);
            } catch (error) {
                throw error;
            }
        });

        // Event Bus: Importing Json data
        watch(() => bus.value.get('import-json'), () => {
            try {
                importJson()
                    .then(res => {
                        const items = res.positions as DraggableInstance;
                        this.items!.values = items.values;
                        const lines = res.lines as LineInstance;
                        this.lines!.values = lines.values;
                    })
                    .catch(err => console.error(err));
            } catch (error) {
                throw error
            }
        });
    }
});
</script>
  
<style scoped>
.container {
    border-radius: 10px;
    overflow: hidden;
    padding: 0px;
    position: relative;
    background: rgba(255, 255, 255, 0.144);
    background-image: radial-gradient(rgba(0, 0, 0, 0.411) 1px, transparent 0);
    background-size: 50px 50px;
    background-position: -19px -19px;
}
</style>
  