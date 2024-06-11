<template>
  <g>
    <!-- Main line -->
    <path 
      @click="select"
      fill="none"
      :id="line?.internalId"
      :d="pathData"
      :stroke-width="5"
      :stroke="line?.endId == '' || line?.selected ? '#512DA8' : '#37474F'"
    ></path>
    
    <!-- Begin- and endpoints -->
    <g>
      <circle
        :cx="line?.start.left"
        :cy="line?.start.top"
        r="8"
        fill="#512DA8"
      ></circle>
      <circle
        :cx="line?.start.left"
        :cy="line?.start.top"
        r="4"
        fill="#212121"
      ></circle>
    </g>
    <g v-if="line?.end != null">
      <circle
        :cx="line?.end.left"
        :cy="line?.end.top"
        r="8"
        fill="#512DA8"
      ></circle>
      <circle
        :cx="line?.end.left"
        :cy="line?.end.top"
        r="4"
        fill="#212121"
      ></circle>
    </g>
  </g>
</template>

<script lang="ts">
  import { LineDetails } from '@/models/line';
  import { PropType } from 'vue';

  export default {
    name: 'Draggable',
    props: {
      line: Object as PropType<LineDetails>,
    },

    computed: {
      pathData() {
        if (this.line?.startId == undefined) return;

        return `
          M${this.line?.start.left} ${this.line?.start.top} 
          L${this.line?.end.left} ${this.line?.end.top}
        `;
      },
    },

    methods: {
      select: function(e: MouseEvent) {
        // Add in pop up to request interaction 
        // > Delete or add in description
        // > Give tooltip like 'dblclick to add description' or create point

        this.line?.points?.push({
          position: { left: e.offsetX, top: e.offsetY },
          hovering: false,
        })
      }
    },

    mounted() {
      const line = this.line!;
      const onMove = (e: MouseEvent) => {
        if (!line.selected) return;

        line.end!.left = e.clientX;
        line.end!.top = e.clientY;
      }

      const onUp = () => {
        this.$emit('remove-line');
        document.removeEventListener('mouseup', onUp);
        document.removeEventListener('mousemove', onMove);
      }

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    }
  };
</script>
  