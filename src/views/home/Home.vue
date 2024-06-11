<template>
  <v-container class="d-flex align-center justify-center flex-column" fluid style="height: 100vh;">
    <div class="main my-5">
      <v-icon class="slow-fade-in fade glow" @click="loadPage">
        mdi-scatter-plot-outline
      </v-icon>
    </div>

    <div class="slide-track">
      <div class="slide">
        <a href="https://github.com/LucvanDeenen">
          <v-icon class="mx-1 slider" size="x-large">
            mdi-github
          </v-icon>
        </a>
        <a href="https://www.linkedin.com/in/luc-van-deenen-561824194/">
          <v-icon class="mx-1 slider" size="x-large">
            mdi-linkedin
          </v-icon>
        </a>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  methods: {
    loadPage: function () {
      this.$router.push('/menu');
    }
  }
})
</script>

<style scoped lang="scss">
.main {
  .v-icon {
    font-size: 100px;
    text-shadow: 0 5px 15px rgba(255, 255, 255, 0);
    transition: all 2s ease;

    &:hover {
      text-shadow: 0 5px 15px rgba(255, 255, 255, 0.8);
    }
  }
}

a {
  color: white;
}
</style>
  