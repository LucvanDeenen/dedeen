<template>
  <v-container v-show="toggle" v-model="toggle">
    <v-dialog
      v-model="toggle"
      scrim="#616161"
      persistent
      width="auto"
    >
      <div class="lds-dual-ring"></div>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Loader',
  props: {
    toggle: Boolean
  },
});
</script>

<style scoped>
.lds-dual-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 6s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    border-color: white transparent white transparent;
    transform: rotate(0deg);
  }

  100% {
    border-color: white transparent white transparent;
    transform: rotate(1800deg);
  }
}
</style>