<template>
  <div :id="item!.internalId" class="draggable" :style="{ top: item!.top + 'px', left: item?.left + 'px' }">

    <!-- Points to start line from -->
    <!-- <points /> -->

    <v-card class="pa-5 border card" :color="!selected ? 'background' : 'primary'" style="overflow: visible;">

      <!-- Image -->
      <v-row class="justify-center">
        <v-img :src="item!.url" inline width="25px" height="25px" class="non-select"></v-img>
      </v-row>

      <!-- Amount Details -->
      <div class="bottom-right non-select limit" style="right: 2%; top: 50%; color: yellow">
        {{ item!.amount > 1 ? item?.amount + 'x' : null }}
      </div>

      <!-- Edit actions -> move to remove button.vue -->
      <actions />

    </v-card>
    
  </div>
</template>

<script lang="ts" >
import { defineComponent, PropType, watch } from 'vue';

import { DraggableDetails } from '@/models/item';
import { Mode } from '@/models/types';

import Points from './Points.vue';
import Actions from './Actions.vue';

import useEventBus from '@/service/eventBus';

export default defineComponent({
  name: 'Draggable',
  props: {
    item: Object as PropType<DraggableDetails>,
  },

  components: {
    Points,
    Actions
  },

  data() {
    return {
      selected: false as boolean,
      hovering: false as boolean,
      mode: Mode.Drag as Mode,
    };
  },

  mounted() {
    const parent = document.querySelector(`#${this.item!.internalId}`) as HTMLElement;
    const entity = parent.querySelector(`.card`) as HTMLElement;
    const item = this.item!;

    parent.style.left = `${item.left} px`;
    let distX: number = parent.offsetLeft;
    parent.style.top = `${item.top} px`;
    let distY: number = parent.offsetTop;

    const onDown = (e: MouseEvent) => {
      e.preventDefault();
      switch (this.mode) {
        case Mode.Drag:
          this.selected = true;
          distX = Math.abs(parent.offsetLeft - e.clientX);
          distY = Math.abs(parent.offsetTop - e.clientY);
          break;
        case Mode.Link:
          this.selected = true;
          this.$emit('create-line', {
            internalId: item.internalId,
            name: item.name,
            top: item.top + (entity.offsetHeight / 2),
            left: item.left + (entity.offsetWidth / 2),
            entity: entity
          })
          break;
        default:
          return;
      }
    };

    const onMove = (e: MouseEvent) => {
      if (!this.selected || this.mode != Mode.Drag) return;

      item.top = e.clientY - distY;
      item.left = e.clientX - distX;

      if (item.lines.length > 0) {
        this.$emit('update-drag', {
          internalId: item.internalId,
          top: item.top + (entity.offsetHeight / 2),
          left: item.left + (entity.offsetWidth / 2),
          lines: item.lines,
        });
      }
    };

    const connectLine = (e: MouseEvent) => {
      if (this.mode != Mode.Link) return;
      this.$emit('connect-line', {
        internalId: item.internalId,
        name: item.name,
        url: item.url,
        top: item.top,
        left: item.left,
        entity: entity,
      });
    }

    entity.addEventListener('mousedown', onDown);
    entity.addEventListener('mouseup', connectLine);
    entity.addEventListener('mouseup', () => this.$emit('save-position', item));
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', () => this.selected = false);

    // Event Bus
    const { bus } = useEventBus()

    // Event Bus: Toggle Action
    watch(() => bus.value.get('action'), (mode: Mode) => {
      this.mode = mode;
    });
  },
})
</script>

<style scoped lang="scss">
.draggable {
  position: absolute;
  overflow: visible;
  font-family: 'runescape_uf', sans-serif;
  max-width: 68px;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

.card:hover {
  z-index: 10;
}
</style>